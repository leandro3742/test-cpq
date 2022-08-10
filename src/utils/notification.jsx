import React from "react";
import CloseIcon from "@mui/icons-material/Close";

export const AddToCartSuccess = (closeSnackbar, dispatch) => {
    return {
        message: "Se agregó exitosamente al carro de compras",
        options: {
            key: new Date().getTime() + Math.random(),
            variant: "success",
            action: (key) => <CloseIcon onClick={() => dispatch(closeSnackbar(key))} />,
        },
    };
};

export const AddToCompareSuccess = (closeSnackbar, dispatch) => {
    return {
        message: "Se agregó el producto a la tabla de comparación",
        options: {
            key: new Date().getTime() + Math.random(),
            variant: "warning",
            action: (key) => <CloseIcon onClick={() => dispatch(closeSnackbar(key))} />,
        },
    };
};

export const LimitComponents = (closeSnackbar, dispatch) => {
    return {
        message: "Maximo de componentes superado",
        options: {
            key: new Date().getTime() + Math.random(),
            variant: "error",
            action: (key) => <CloseIcon onClick={() => dispatch(closeSnackbar(key))} />,
        },
    };
};

export const AlredyExist = (closeSnackbar, dispatch) => {
    return {
        message: "Este producto ya está siendo comparado",
        options: {
            key: new Date().getTime() + Math.random(),
            variant: "error",
            action: (key) => <CloseIcon onClick={() => dispatch(closeSnackbar(key))} />,
        },
    };
};
export const Failed = (closeSnackbar, dispatch) => {
    return {
        message: "Se agregó exitosamente al carro de compras",
        options: {
            key: new Date().getTime() + Math.random(),
            variant: "error",
            action: (key) => <CloseIcon onClick={() => dispatch(closeSnackbar(key))} />,
        },
    };
};

export const warning = (closeSnackbar, dispatch) => {
    return {
        message: "Se agregó exitosamente al carro de compras",
        options: {
            key: new Date().getTime() + Math.random(),
            variant: "warning",
            action: (key) => <CloseIcon onClick={() => dispatch(closeSnackbar(key))} />,
        },
    };
};

export const info = (closeSnackbar, dispatch) => {
    return {
        message: "Se agregó exitosamente al carro de compras",
        options: {
            key: new Date().getTime() + Math.random(),
            variant: "info",
            action: (key) => <CloseIcon onClick={() => dispatch(closeSnackbar(key))} />,
        },
    };
};
