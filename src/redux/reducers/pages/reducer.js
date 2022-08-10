const initialState = {
    totalPages: 1,
    currentPage: 1,
};

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case "SET_PAGES":
            return {
                totalPages: action.payload.totalPages ? action.payload.totalPages : state.totalPages,
                currentPage: action.payload.currentPage ? action.payload.currentPage : state.currentPage,
            };
        default:
            return state;
    }
}
