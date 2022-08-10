import _ from "lodash";

const initialState = [];

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case "SET_FILTER":
            console.log(action.payload);
            if (Array.isArray(action.payload)) {
                return [...state];
            } else {
                if (state.indexOf(action.payload) !== -1) {
                    return state.filter((elem) => {
                        if (elem === action.payload) {
                            return false;
                        }
                        return true;
                    });
                }
                return [...state, action.payload];
            }
        case "ADD_ADVANCED_FILTER":
            return [...state, ...action.payload];

        case "REMOVE_ADVANCED_FILTER":
            console.log("entra");
            if (Array.isArray(action.payload)) {
                return _.filter(state, (elem) => {
                    let remove = false;
                    _.each(action.payload, (filter) => {
                        if (JSON.stringify(elem) === JSON.stringify(filter)) remove = true;
                    });
                    console.log(remove);
                    if (remove) return false;
                    else return true;
                });
            } else {
                return _.filter(state, (elem) => {
                    if (elem === action.payload) {
                        return false;
                    }
                    return true;
                });
            }
        default:
            return state;
    }
}
