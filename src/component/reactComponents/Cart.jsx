import React, { useState } from "react";
import { showModal } from "../../redux/actions/modal";
import { addOtherComponent, removeToCart, addDiscount } from "../../redux/actions/cart";

import { Paper } from "@material-ui/core";
import Button from "@mui/material/Button";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import _ from "lodash";

const colorInfo = "#0288D1";
const colorBlock = "#DEDEDE";

const Cart = (props) => {
    const [colorRemove] = useState(colorBlock);
    const [colorAdd] = useState(colorInfo);
    let total = 0;
    const convert = (str) => {
        return parseFloat(str);
    };

    return (
        <Paper elevation={3} className="m-auto row col-7 d-flex justify-content-center">
            {props.state.cart &&
                props.state.cart.map((elem, index) => {
                    total = total + convert(elem.component.value["Lista Pùblico U$S"]) * elem.cant;
                    return (
                        <Paper elevation={2} className="row m-1 col-11 d-flex justify-content-evenly align-items-center" key={index}>
                            <img style={{ width: "90px" }} src={`${import.meta.env.VITE_BACKEND_SERVICE}/api/reports/image?id=${elem.component.value["Número material"]}`} alt={elem.component.value["Número material"]} />
                            <div className="col-12 col-lg-6 text-center">
                                <div className="m-1">
                                    {_.map(elem.component.value, (value, key) => {
                                        let previewProperties = ["Número material", "Núcleo", "Capacidad de carga (kg)", "Lista Pùblico U$S"];
                                        if (previewProperties.includes(key))
                                            return (
                                                <div key={key}>
                                                    {key}: {value}
                                                </div>
                                            );
                                    })}
                                </div>
                            </div>
                            <div className="col-12 col-lg-2 d-flex flex-column justify-content-around align-items-around">
                                <div className="border border-1 d-flex justify-content-center align-items-center">
                                    <RemoveIcon
                                        style={{ cursor: "pointer" }}
                                        className="col-5"
                                        htmlColor={colorRemove}
                                        onClick={() => {
                                            if (elem.cant > 1) props.dispatch(addOtherComponent({ operation: "remove", component: elem.component }));
                                        }}
                                    />

                                    <input style={{ border: "none" }} className="col-5 text-center" value={elem.cant} readOnly={true} />
                                    <AddIcon style={{ cursor: "pointer" }} color="info" htmlColor={colorAdd} onClick={() => props.dispatch(addOtherComponent({ operation: "more", component: elem.component }))} />
                                </div>
                                <span className="text-center">Descuento</span>
                                <div className="border border-1 d-flex justify-content-center align-items-around">
                                    <input style={{ border: "none" }} type="number" className="col-10 text-center" value={elem.discount ? elem.discount : ""} placeholder="0" onChange={(e) => props.dispatch(addDiscount({ discount: e.target.value, component: elem.component }))} />
                                    <span>
                                        <b>%</b>
                                    </span>
                                </div>
                                <Button variant="outlined" className="my-3" color="error" onClick={() => props.dispatch(removeToCart(elem.component))}>
                                    Eliminar
                                </Button>
                            </div>
                        </Paper>
                    );
                })}

            <div className="d-flex justify-content-end">
                Subtotal: ${total.toFixed(2)}
                <Button
                    variant="contained"
                    size="large"
                    className="m-3"
                    onClick={() => {
                        props.dispatch(showModal(props.state.cart));
                    }}
                >
                    Comprar
                </Button>
            </div>
        </Paper>
    );
};

export default Cart;
