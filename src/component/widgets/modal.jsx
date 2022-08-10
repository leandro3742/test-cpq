import React, { useEffect } from "react";
import Modal from "@mui/material/Modal";
import { CardDetail } from "../reactComponents/cardDetail";
import { closeModal } from "../../redux/actions/modal";
import FormDetail from "../reactComponents/formDetail";

let style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    overflowY: "auto",
    width: "auto",
    maxHeight: "100%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export const ModalController = (props) => {
    useEffect(() => {
        if (window.screen.width <= 576) {
            style.width = "100%";
            style.borderRadius = "0";
        }
    }, []);
    return (
        <div>
            <Modal open={props.modal.active} onClose={() => props.dispatch(closeModal())}>
                <div style={style}>{Array.isArray(props.data) ? <FormDetail isDoor={props.isDoor} data={props.data} dispatch={props.dispatch} cart={props.cart} /> : <CardDetail data={props.data} dispatch={props.dispatch} />}</div>
            </Modal>
        </div>
    );
};
