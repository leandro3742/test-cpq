const initialState = [];

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case "SET_COMPARE":
            return [...state.concat(action.payload)];
        case "REMOVE_COMPARE":
            return state.filter((elem) => {
                if (elem["_id"] === action.payload) {
                    return false;
                }
                return true;
            });
        default:
            return state;
    }
}
