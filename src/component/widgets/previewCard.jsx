import React from "react";
import { showModal } from "../../redux/actions/modal";
import { enqueueSnackbar, closeSnackbar } from "../../redux/actions/notifications";

import { addToCart } from "../../redux/actions/cart";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CompareIcon from "@mui/icons-material/Compare";
import Paper from "@mui/material/Paper";

import { AddToCartSuccess, AddToCompareSuccess, LimitComponents, AlredyExist } from "../../utils/notification";
import { setCompare } from "../../redux/actions/compare";

export const PreviewCard = (props) => {
    let id = props.data.value["Número material"];
    const addComponentToCart = () => {
        props.dispatch(addToCart(props.data));
        props.dispatch(enqueueSnackbar(AddToCartSuccess(closeSnackbar, props.dispatch)));
    };

    const addComponentToCompare = () => {
        let maxComponents = 0;
        if (window.screen.width > 426) maxComponents = 4;
        else maxComponents = 3;

        if (props.state.compare.length < maxComponents) {
            let exist = false;
            props.state.compare.forEach((elem) => {
                if (elem["_id"] === props.data["_id"]) {
                    props.dispatch(enqueueSnackbar(AlredyExist(closeSnackbar, props.dispatch)));
                    exist = true;
                }
            });
            if (!exist) {
                props.dispatch(setCompare(props.data));
                props.dispatch(enqueueSnackbar(AddToCompareSuccess(closeSnackbar, props.dispatch)));
            }
        } else props.dispatch(enqueueSnackbar(LimitComponents(closeSnackbar, props.dispatch)));
    };

    return (
        <Paper style={{ height: "150px" }} className="row m-0 d-flex justify-content-center align-items-center">
            <img style={{ maxHeight: "150px" }} className="col-3" src={`${import.meta.env.VITE_BACKEND_SERVICE}/api/reports/image?id=${id}`} alt="" />
            <div className="col-9">
                <div className="m-1">
                    {props.previewProperties.map((property) => {
                        let key = Object.keys(props.data.value);
                        let index = key.indexOf(property);
                        return (
                            <div key={key[index]}>
                                {key[index]}: {props.data.value[property]}
                            </div>
                        );
                    })}
                </div>
                <div className="d-flex justify-content-around align-items-end">
                    <Button color="primary" variant="outlined" onClick={() => props.dispatch(showModal(props.data))}>
                        info
                    </Button>
                    <Button color="warning" variant="outlined" onClick={addComponentToCompare}>
                        <CompareIcon />
                        <span>Compare</span>
                    </Button>
                    <Button color="success" variant="outlined" onClick={addComponentToCart}>
                        Add
                        <ShoppingCartIcon />
                    </Button>
                </div>
            </div>
        </Paper>
    );
};
