import { antennaComponents } from "../mock/gtt/features/antennaComponents";
import { dataPowerComponents } from "../mock/gtt/features/dataPowerComponents";
import { enclosureComponents } from "../mock/gtt/features/enclosure";
import { exampleComponents } from "../mock/gtt/features/exampleComponents";
import { internalAccesoryComponents } from "../mock/gtt/features/internalAccesoryComponents";
import { pcbConnectorComponents } from "../mock/gtt/features/pcbConnector";

const componentController = {
    setComponent(schema) {
        this.componentSet[schema.value.name] = schema;
    },
    editComponent(oldComponent, newSchema) {
        this.componentSet[newSchema.value.name] = newSchema;
        delete this.componentSet[oldComponent];
    },
    deleteComponent(componentName) {
        delete this.componentSet[componentName];
    },
    getComponent(nameComponent) {
        return this.componentSet[nameComponent];
    },
    getAllComponents() {
        let aux = [];
        let components = this.componentSet;
        for (let i in components) {
            aux.push(components[i]);
        }
        return aux;
    },
    getAllComponentsByFeature(featureId) {
        let aux = [];
        let components = this.componentSet;
        for (let i in components) {
            if (components[i].schema === featureId) aux.push(components[i]);
        }
        return aux;
    },
    getPropertyComponent(featureId, property) {
        let aux = this.getAllComponentsByFeature(featureId);
        const response = [];
        for (let i in aux) {
            if (!response.includes(aux[i].value[property])) response.push(aux[i].value[property]);
        }
        return response;
    },

    componentSet: {},
};

dataPowerComponents.forEach((elem) => componentController.setComponent(elem));
enclosureComponents.forEach((elem) => componentController.setComponent(elem));
antennaComponents.forEach((elem) => componentController.setComponent(elem));
internalAccesoryComponents.forEach((elem) => componentController.setComponent(elem));
exampleComponents.forEach((elem) => componentController.setComponent(elem));
pcbConnectorComponents.forEach((elem) => componentController.setComponent(elem));
// essenComponents.forEach((elem) => componentController.setComponent(elem));
export { componentController };
