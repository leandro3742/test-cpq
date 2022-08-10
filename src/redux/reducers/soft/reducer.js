const initialState = {};

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case "SET_INITIAL_STATE_SOFT":
            return { ...state, ...action.payload };
        case "SET_SOFT":
            let soft = state[action.payload.soft];

            // Activo los soft
            for (let i in state.children) {
                state.soft[soft.children[i]].enabled = true;
            }

            return { ...state };

        default:
            return { ...state };
    }
}
