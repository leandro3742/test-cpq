import React from "react";
import { enqueueSnackbar, closeSnackbar } from "../../redux/actions/notifications";
import { closeModal } from "../../redux/actions/modal";
import { AddToCartSuccess } from "../../utils/notification";
import { addToCart } from "../../redux/actions/cart";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

import _ from "lodash";

export const CardDetail = (props) => {
    const addComponentToCart = () => {
        props.dispatch(addToCart(props.data));
        props.dispatch(enqueueSnackbar(AddToCartSuccess(closeSnackbar, props.dispatch)));
    };
    if (props.data.value) {
        let id = props.data.value["Número material"];
        return (
            <Card className="w-100">
                <CardContent>
                    <div className="d-lg-flex row">
                        <div className="d-flex justify-content-end">
                            <CloseIcon style={{ cursor: "pointer" }} onClick={() => props.dispatch(closeModal())} />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 m-0">
                            <CardMedia component="img" image={`${import.meta.env.VITE_BACKEND_SERVICE}/api/reports/image?id=${id}`} alt="green iguana" />
                        </div>
                        <div className="col-lg-5 col-md-5 col-12 p-2">
                            <Typography gutterBottom variant="h5" component="div">
                                {props.data.value.name}
                            </Typography>

                            {_.map(props.data.value, (elem, it) => {
                                if (typeof elem !== "object" && it !== "name") {
                                    return (
                                        <Typography key={it} variant="body2" color="text.secondary">
                                            <b>{it}</b>: {elem}
                                        </Typography>
                                    );
                                }
                            })}
                        </div>
                    </div>
                    <CardActions className="d-flex justify-content-end">
                        <Button size="small" color="error" variant="outlined" onClick={() => props.dispatch(closeModal())}>
                            Close
                        </Button>
                        <Button size="small" color="success" variant="outlined" onClick={addComponentToCart}>
                            Add
                            <ShoppingCartIcon />
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
        );
    } else {
        return (
            <Card className="">
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.data.name}
                    </Typography>

                    {_.map(props.data, (elem, it) => {
                        if (typeof elem !== "object" && it !== "name") {
                            it = it.toUpperCase();
                            return (
                                <Typography key={it} variant="body2" color="text.secondary">
                                    {it}: {elem}
                                </Typography>
                            );
                        }
                    })}
                </CardContent>
            </Card>
        );
    }
};
