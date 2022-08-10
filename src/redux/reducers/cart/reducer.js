const initialState = [];

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case "SET_INITIAL_STATE_CART":
            console.log(action.payload);
            return initialState;

        case "ADD_TO_CART":
            let exist = false;
            state.forEach((elem) => {
                if (elem.component === action.payload) {
                    exist = true;
                }
            });
            if (exist)
                return state.map((elem) => {
                    if (elem.component === action.payload) {
                        return { cant: elem.cant + 1, component: elem.component };
                    }
                    return elem;
                });
            return [...state.concat({ cant: 1, component: action.payload })];

        case "ADD_OTHER_COMPONENT":
            return state.map((elem) => {
                if (elem.component === action.payload.component) {
                    if (action.payload.operation === "remove") {
                        return { cant: elem.cant - 1, component: elem.component };
                    } else if (action.payload.operation === "more") return { cant: elem.cant + 1, component: elem.component };
                }
                return elem;
            });
        case "REMOVE_TO_CART":
            return state.filter((elem) => {
                if (elem.component === action.payload) return false;
                return true;
            });

        case "ADD_DISCOUNT":
            return state.map((elem) => {
                if (elem.component === action.payload.component) {
                    if (action.payload.operation === "remove") {
                        return { cant: elem.cant - 1, component: elem.component };
                    } else if (action.payload.operation === "more") return { cant: elem.cant + 1, component: elem.component };
                    return { cant: elem.cant, component: elem.component, discount: action.payload.discount };
                }
                return elem;
            });
        default:
            return state;
    }
}
