const { componentClasses } = require("./componentClasses");
const { components } = require("./components");
const { componentsTypes } = require("./componentsType");
const { sockets } = require("./sockets");
const { socketType } = require("./socketType");
// const { tags } = require("./tags")

let features = {};

//Le da nombre a el feature
for (let i in componentClasses) {
    features[componentClasses[i].Name] = {
        id: `cpq://gtt/${componentClasses[i].Name}`,
        title: componentClasses[i].Name,
        type: "object",
        properties: {},
    };
}

let aux = [];
for (let i in componentsTypes) {
    let it = componentsTypes[i];
    if (it.Sockets) {
        aux.push(componentsTypes[i]);
    }
}

//Guarda en un objeto todos los nombre de los socketType que van con cada socket
const filterBySocketName = (data) => {
    let ret = {};
    let aux = [];
    for (let i in data) {
        if (!aux.includes(data[i].Name)) {
            aux.push(data[i].Name);
            ret[data[i].Name] = [];
        }
        ret[data[i].Name].push(data[i]["Socket Type"]);
    }
    return ret;
};

const filterBySocketType = (data) => {
    let ret = {};
    let aux = [];
    for (let i in data) {
        if (!aux.includes(data[i].Name)) {
            aux.push(data[i].Name);
            ret[data[i].Name] = [];
        }
        ret[data[i].Name].push(data[i]["Suitable Components"]);
    }
    return ret;
};

const filterByComponentType = (data) => {
    let ret = {};
    let aux = [];
    for (let i in data) {
        if (!aux.includes(data[i].Name)) {
            aux.push(data[i].Name);
            ret[data[i].Name] = [];
        }
        if (data[i]["Sockets"]) ret[data[i].Name].push(data[i]["Sockets"]);
    }
    return ret;
};

const filterByComponentClasses = (data, father) => {
    let ret = {};
    let aux = [];
    if (father === "class") {
        for (let i in data) {
            if (!aux.includes(data[i].Class)) {
                aux.push(data[i].Class);
                ret[data[i].Class] = [];
            }
            if (data[i]["Name"]) ret[data[i].Class].push(data[i]["Name"]);
        }
    } else if (father === "name") {
        for (let i in data) {
            if (!aux.includes(data[i].Name)) {
                aux.push(data[i].Name);
                ret[data[i].Name] = [];
            }
            if (data[i]["Sockets"]) ret[data[i].Name].push(data[i]["Sockets"]);
        }
    }
    return ret;
};

const convertSocketTypeToSockets = (socket, socketType) => {
    let ret = {};
    for (let i in socket) {
        ret[i] = [];
    }
    for (let i in socket) {
        for (let j in socketType) {
            for (let k in socket[i]) {
                if (j === socket[i][k]) {
                    for (let m in socketType[j]) {
                        ret[i].push(socketType[j][m]);
                    }
                }
            }
        }
    }
    return ret;
};

const convertComponentsToComponentsCpq = (data, arrComp) => {
    let ret = {};
    let aux = [];
    let components = [];
    for (let i in data) {
        if (!aux.includes(data[i].Name)) {
            aux.push(data[i].Name);
            ret[data[i].Name] = [];
        }
        if (data[i]["Class"]) ret[data[i].Name].push({ featureName: data[i]["Class"], ports: data[i]["Sockets"] });
    }
    for (let i in arrComp) {
        for (let j in ret) {
            if (arrComp[i]["Component Type"] === j) {
                components.push({
                    name: arrComp[i].Name,
                    featureName: ret[j][0].featureName,
                    ports: ret[j][0].ports,
                });
                // arrComp[i]["Feature name"] = ret[j][0].featureName;
                // arrComp[i]["Ports"] = ret[j][0].ports;
            }
        }
    }
    for (let i in components) {
        let aux = [];
        let auxPorts = {};
        for (let j in components[i].ports) {
            if (!aux.includes(components[i].ports[j])) {
                aux.push(components[i].ports[j]);
                auxPorts[components[i].ports[j]] = 1;
            } else {
                auxPorts[components[i].ports[j]] += 1;
            }
        }
    }
    return components;
    // return arrComp;
};

const changeSocketsNameToSocketsType = (data, sockets) => {
    let keys = Object.keys(sockets);
    for (let i in data) {
        if (keys.indexOf(data[i].Sockets) != -1) {
            let index = keys.indexOf(data[i].Sockets);
            data[i].Sockets = sockets[keys[index]];
        }
    }
    for (let i in data) {
        if (typeof data[i].Sockets !== "object") data[i].Sockets = [];
    }

    return data;
};

let socketRet = filterBySocketName(sockets);
// console.log(socketRet);

let socketTypeRet = filterBySocketType(socketType);
// console.log(socketTypeRet);

let componentTypeRet = filterByComponentType(componentsTypes); //[{compTypes.name: [compTypes.sockets]}]
// console.log(componentTypeRet);

let componentClassesRet = filterByComponentClasses(componentsTypes, "class");
// console.log(componentClassesRet);

let convert = convertSocketTypeToSockets(socketRet, socketTypeRet); //[socket.name: [socketType.name]]
// console.log(convert);

let addSocketsInComponentType = changeSocketsNameToSocketsType(componentsTypes, convert);
// console.log(addSocketsInComponentType);

let arrComponents = convertComponentsToComponentsCpq(addSocketsInComponentType, components);
// console.log(arrComponents);

const createFeature = (data) => {
    let aux = {};
    let ret = [];
    for (let i in data) {
        aux = {
            id: `cpq://gtt/${i}`,
            title: i,
            properties: {
                name: {
                    type: "string",
                },
                ports: [],
            },
        };
        for (let j in data[i]) {
            let entra = false;
            for (let k in aux.properties.ports) {
                if (aux.properties.ports[k].fieldName === data[i][j]) {
                    entra = true;
                }
            }
            if (!entra) {
                aux.properties.ports.push({
                    fieldName: data[i][j],
                    port: [
                        {
                            schemas: data[i][j],
                        },
                    ],
                });
            }
        }
        ret.push(aux);
    }
    return ret;
};

const compFeature = (data) => {
    let ret = [];
    for (let i in data) {
        //Falta pulir los ports, por ahora tengo los name del componentType, lo que tengo que hacer es buscar todos los componentes que esten aqui adentro
        // console.log(data[i]);
        for (let j in data[i].ports) {
            // getComponentName(data[i].ports[j]);
        }
        ret.push({
            value: {
                name: data[i].name,
            },
            schema: `cpq://gtt/${data[i]["featureName"]}`,
        });
        // console.log(ret[i]);
    }
    return ret;
};
// compFeature(arrComponents);
console.log(createFeature(componentClassesRet));
// export const arrFeatures = createFeature(componentClassesRet);
