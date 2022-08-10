import { fieldTypeController } from "../features/fieldTypes/fieldTypeController";
// import { testValidation } from "../test";
import { featureSchema } from "../features/newSchema";
import { componentController } from "../features/componentController";
import { featureController } from "../features/featureController";

export const createSchema = (schema) => {
    console.log(schema)
    let schemaUi = {
        id: "cpq://id_client/" + schema["name feature"],
        title: schema["name feature"],
        type: "object",
        properties: {
            "fieldName": {
                "type": ""
            }
        },
        required: [],
        additionalProperties: false
    };
    let auxProps = {};
    let ports = []
    if (!schema.fields) return {}

    for (let i in schema.fields) {
        let field = schema.fields[i];
        if (field.info && field.info.name && field.info.fieldType) {
            if (field.info.required) schemaUi.required.push(field.info.name)
            if (field.info.fieldType["field type"] === "ports") ports.push({ fieldName: field.info.name, port: field.info.fieldType.values })
            else Object.assign(auxProps, fieldTypeController.serialize(field.info.fieldType["field type"], field))
        }
    }
    if (ports.length > 0) auxProps.ports = ports;
    schemaUi.properties = auxProps;
    console.log(schemaUi)
    return (schemaUi)
}

export const convertJsonSquemaToUiSchema = (schema, listFeatures) => {
    let feature = featureSchema();
    feature.properties["name feature"].default = schema.title
    for (let i in schema.properties) {
        let property = schema.properties[i];
        if (i === "ports") {
            for (let j in property)
                feature.properties.fields.default.push(addDefaultValue(property[j], "ports", true))
        }
        else if (i === 'enum') {
            for (let j in property)
                feature.properties.fields.default.push(addDefaultValue(property[j], "enum", false))
        }
        else
            feature.properties.fields.default.push(addDefaultValue(i, property.type, false))
    }
    return feature
}

const addDefaultValue = (value, type, isPort) => {
    if (isPort) {
        return {
            info: {
                name: value.fieldName,
                fieldType: {
                    "field type": type,
                    values: value.port
                },
            }
        }
    }
    return {
        info: {
            name: value,
            fieldType: {
                "field type": type
            }
        }
    }
}

export const convertAjvToUiSchema = (schema, readOnly, arrChildren, arrDefaultValue) => {
    for (let i in arrDefaultValue) {
        if (typeof arrDefaultValue[i] === "object") {
            for (let j in schema.properties.ports) {
                console.log(schema.properties.ports[j])
            }
        }
        else
            schema.properties[i].default = arrDefaultValue[i]
    }
    if (readOnly) {
        for (let i in schema.properties)
            Object.assign(schema.properties[i], { readOnly: true })
    }
    if (schema.properties.ports) {
        let children = schema.properties.ports;
        for (let i in children) {
            let components = []
            let arrPredicate = [];
            let arrSchemas = [];
            for (let j in children[i].port) {
                let val = children[i].port[j];
                arrSchemas.push(val.schemas)
                arrPredicate.push(val.predicate)
            }
            if (arrSchemas.length > 0) {
                for (let i in arrSchemas) {
                    let feature = featureController.getFeatureByName(arrSchemas[i])
                    let listComponent = componentController.getAllComponents()
                    for (let j in listComponent)
                        if (listComponent[j].schema === feature.id) components.push(listComponent[j].value.name)
                }
                let objectComp = {
                    type: "object",
                    properties: {
                        components: {
                            type: "string",
                            widget: "SelectMulti",
                            enum: components,
                            view: {
                                sizeMd: 8
                            },
                        },
                        cantPorts: {
                            type: "number",
                            view: {
                                sizeMd: 4
                            },
                            default: 1
                        }
                    }
                }
                Object.assign(schema.properties, { [children[i].fieldName]: objectComp });
            }
        }
        delete schema.properties.ports;
    }
    return { schema: schema, arr: arrChildren }
}

// QUERYS QUE DEBERIAN ESTAR EN BACK-END
const getAllComponents = (featureId) => {
    if (featureId === "cpq://id_client/antenna") return ["antenna", componentController.getAllComponentsByFeature(featureId)]
    else if (featureId === "cpq://id_client/dataPower") return ["dataPower", componentController.getAllComponentsByFeature(featureId)]
    else if (featureId === "cpq://id_client/dataPower/internalAccesory") return ["internalAccesory", componentController.getAllComponentsByFeature(featureId)]
    else if (featureId === "cpq://id_client/dataPower/externalAccesory") return ["externalAccesory", componentController.getAllComponentsByFeature(featureId)]
    else if (featureId === "cpq://id_client/dataPower/externalAccesory/example") return ["example", componentController.getAllComponentsByFeature(featureId)]
    else return ["", []]
}


export const existChildren = (idFeature, listFeatures, arrChildren) => {
    let childSchema = {};
    let feature = listFeatures[idFeature]
    if (feature.properties.children) {
        let children = feature.properties.children
        for (let j in children) {
            let list = getAllComponents(children[j].items["$ref"])
            arrChildren.push({ name: list[0], id: children[j].items["$ref"], father: getAllComponents(idFeature)[0] })
            let listNameComponents = [];
            for (let j in list[1])
                listNameComponents.push(list[1][j].value.name)
            let objectComp = {
                type: "object",
                properties: {
                    [list[0]]: {
                        type: "string",
                        widget: "Select",
                        enum: listNameComponents
                    }
                }
            }
            Object.assign(childSchema, objectComp.properties);
        }
        return childSchema;
    }
    return null
}