const initialState = [];

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case "ENQUEUE_SNACKBAR":
            return [
                ...state,
                {
                    key: action.key,
                    ...action.notification,
                },
            ];
        case "REMOVE_SNACKBAR":
            return state.filter((notification) => notification.key !== action.key);

        case "CLOSE_SNACKBAR":
            return state.map((notification) => (action.dismissAll || notification.key === action.key ? { ...notification, dismissed: true } : { ...notification }));
        default:
            return state;
    }
}
