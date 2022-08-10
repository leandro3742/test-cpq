const initialState = [];
export default function reducers(state = initialState, action) {
    switch (action.type) {
        case "SET_FEATURES":
            return action.payload;

        default:
            return state;
    }
}
