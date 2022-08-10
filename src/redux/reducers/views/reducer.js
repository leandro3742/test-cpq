import { featureController } from "../../../features/featureController";

let feature = featureController.getAllNameFeatures();

const initialState = {
    componentDetail: [{}],
    cardComponent: [
        {
            styles: {
                text: "text-center",
                button: "d-flex justify-content-center",
                image: "d-flex justify-content-center",
            },
            control: {
                properties: "name:value",
            },
        },
    ],
    searchCompoent: [{}],
    selectorComponent: [],
    reactComponents: [
        {
            name: "selector",
            fields: {
                data: {
                    name: "data",
                    type: "string",
                    widget: "Select",
                    enum: feature,
                },
                startWidth: {
                    name: "start width",
                    type: "string",
                    widget: "Select",
                    enum: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                },
                endWidth: {
                    name: "end width",
                    type: "string",
                    widget: "Select",
                    enum: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                },
                // startHeight: {
                //     name: "start height",
                //     type: "string",
                //     widget: "Select",
                //     enum: ["1", "2", "3", "4", "5"],
                // },
                // endHeight: {
                //     name: "end height",
                //     type: "string",
                //     widget: "Select",
                //     enum: ["1", "2", "3", "4", "5"],
                // },
            },
        },
        {
            name: "navigation",
            fields: {
                model: {
                    name: "type navigation",
                    type: "string",
                    widget: "Select",
                    enum: ["tree", "steps"],
                },
            },
        },
        {
            name: "detail",
            fields: {
                data: {
                    name: "data",
                    type: "string",
                    widget: "Select",
                    enum: feature,
                },
            },
        },
        {
            name: "list ports",
            fields: {
                data: {
                    name: "data",
                    type: "string",
                    widget: "Select",
                    enum: feature,
                },
            },
        },
        {
            name: "filter",
        },
    ],
    filters: [],
    components: [],
};

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case "SET_SEARCH_COMPONENT":
            return { ...state, searchCompoent: action.payload };

        case "SET_COMPONENT_DETAIL":
            return { ...state, componentDetail: action.payload };

        case "SET_SELECTOR_COMPONENT":
            return { ...state, selectorComponent: action.payload };

        case "CLEAN_VIEW_COMPONENTS":
            return { ...state, componentDetail: {}, searchCompoent: {}, selectorComponent: {} };

        case "SET_CARD_COMPONENT":
            return { ...state, cardComponent: action.payload };

        case "CREATE_REACT_COMPONENT":
            state.components.push(action.payload);
            return { ...state };

        case "SAVE_FILTERS":
            console.log(action.payload);
            return { ...state, filters: [...state.filters, action.payload] };

        default:
            return { ...state };
    }
}
