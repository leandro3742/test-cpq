import { arrayValidator } from "@ui-schema/ui-schema";
import { componentController } from "../componentController";
import { featureController } from "../featureController";

export const dic = [{
    fieldName: 'number',
    widgetConfig: {
        "min value": {
            type: "number",
            view: {
                sizeXs: 3,
            },
        },
        "max value": {
            type: "number",
            view: {
                sizeXs: 3,
            },
        },
    },
    serializer: (field) => {
        let aux = { type: "integer" };
        if (field.info.fieldType["min value"])
            aux.minimum = field.info.fieldType["min value"];
        if (field.info.fieldType["max value"])
            aux.maximum = field.info.fieldType["max value"];
        return { [field.info.name]: aux };
    },
    deserializer: () => { },
},
{
    fieldName: 'string',
    widgetConfig: {},
    serializer: (field) => {
        return {
            [field.info.name]: {
                type: field.info.fieldType["field type"],
            },
        };
    },
    deserializer: () => { },
},
{
    fieldName: 'enum',
    widgetConfig: {
        values: {
            type: "array",
            widget: "SimpleList",
            deleteOnEmpty: true,
            minItems: 2,
            items: {
                type: "string",
                tt: "ol",
            },
        },
        SelectWidget: {
            type: "string",
            widget: "Select",
            enum: ["SimpleList", "Select", "SelectMulti", "OptionsCheck"],
        },
    },
    serializer: (field) => {
        return {
            [field.info.name]: {
                type: "string",
                widget: field.info.fieldType["SelectWidget"],
                enum: field.info.fieldType["values"],
            },
        };
    },
    deserializer: () => { },
},
{
    fieldName: 'ports',
    widgetConfig: {
        values: {
            type: "array",
            widget: "SimpleList",
            deleteOnEmpty: true,
            minItems: 2,
            default: [""],
            items: {
                type: "object",
                properties: {   
                    predicate: {
                        type: "string"
                    },
                    schemas: {
                        type: "string",
                        widget: "Select",
                        deleteOnEmpty: true,
                        minItems: 2,
                        enum: featureController.getAllNameFeatures()
                    },
                }
            },
        },
    },
    serializer: (field) => {
        let arrPredicate = [];
        let arrSchemas = [];
        console.log(field.info.fieldType.values)        
        for(let i in field.info.fieldType.values){
            let val = field.info.fieldType.values;
            arrSchemas.push(val[i].schemas)
            arrPredicate.push(val[i].predicate)
        }
        //Logica para mostrar los componentes que son validos
            let components = []
            for(let i in arrSchemas){
                let feature = featureController.getFeatureByName(arrSchemas[i])
                let listComponent = componentController.getAllComponents()
                for(let j in listComponent)
                    if(listComponent[j].schema === feature.id) components.push(listComponent[j].value.name)
            }
        //Logica para mostrar los componentes que son validos

        return {
            [field.info.name]: {
                type: "string",
                widget: "Select",
                enum: components
                // predicate:{
                //     predicates: arrPredicate,
                //     schemas: arrSchemas,
                // }

            },
        };
    },
    deserializer: () => { },
},
{
    fieldName: 'schemas',
    widgetConfig: { 
        schemas: {
            type: "string",
            widget: "Select",
            deleteOnEmpty: true,
            minItems: 2,
            enum: featureController.getAllNameFeatures()
        },
    },
    serializer: () => { },
    deserializer: () => { },
},

];
