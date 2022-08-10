const initialState = [];
export default function reducers(state = initialState, action) {
    switch (action.type) {
        case "SET_COMPONENTS":
            return action.payload;
        default:
            return state;
    }
}
