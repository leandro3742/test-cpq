const initialState = {};

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case "SET_INITIAL_STATE_HARD":
            return { ...state, ...action.payload };
        case "SET_HELP":
            let auxState = JSON.parse(JSON.stringify(state));
            let aux = auxState[action.payload.soft];
            if (aux) {
                aux.component = action.payload.component;
            } else {
                aux = {};
                aux.component = action.payload.component;
            }

            auxState[action.payload.soft] = aux;
            auxState.selected = action.payload.soft;

            return { ...auxState };
        default:
            return { ...state };
    }
}
