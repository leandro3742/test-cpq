export const SHOW_MODAL = "SHOW_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const showModal = (payload) => ({
    type: SHOW_MODAL,
    payload,
});

export const closeModal = (payload) => ({
    type: CLOSE_MODAL,
    payload,
});
