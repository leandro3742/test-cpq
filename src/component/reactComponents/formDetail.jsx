import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import GeneratorReport from "../widgets/generatorReport";

const stepDoor = [
    {
        name: "Cliente",
        optional: false,
        data: {
            Cliente: {
                type: "text",
                required: false,
                size: "col-10",
            },
            Proyecto: {
                type: "text",
                required: false,
                size: "col-10",
            },
            Contacto: {
                type: "text",
                required: false,
                size: "col-10",
            },
            "Correo electrónico": {
                type: "text",
                required: false,
                size: "col-10",
            },
        },
    },
    {
        name: "Condiciones de venta",
        optional: false,
        data: {
            "Número de cotización": {
                type: "text",
                size: "col-10",
            },
            "Formas de pago": {
                type: "text",
                required: false,
                size: "col-10",
            },
            "Plazo de entrega": {
                type: "text",
                required: false,
                size: "col-10",
            },
            "Validez de la oferta": {
                type: "text",
                required: false,
                size: "col-10",
            },
        },
    },
    {
        name: "Vendedor",
        optional: false,
        data: {
            Remitente: {
                type: "string",
                required: false,
                size: "col-10",
            },
            "Teléfono vendedor": {
                type: "string",
                required: false,
                size: "col-10",
            },
            "Correo electrónico vendedor": {
                type: "string",
                required: false,
                size: "col-10",
            },
        },
    },
];

const stepWheel = [
    {
        name: "Cliente",
        optional: false,
        data: {
            Cliente: {
                type: "text",
                required: false,
                size: "col-10",
            },
            Proyecto: {
                type: "text",
                required: false,
                size: "col-10",
            },
            Contacto: {
                type: "text",
                required: false,
                size: "col-10",
            },
            "Correo electrónico": {
                type: "text",
                required: false,
                size: "col-10",
            },
        },
    },
    {
        name: "Condiciones de venta",
        optional: false,
        data: {
            "Número de cotización": {
                type: "text",
                size: "col-10",
            },
            "Formas de pago": {
                type: "text",
                required: false,
                size: "col-10",
            },
            "Plazo de entrega": {
                type: "text",
                required: false,
                size: "col-10",
            },
            "Validez de la oferta": {
                type: "text",
                required: false,
                size: "col-10",
            },
        },
    },
    {
        name: "Vendedor",
        optional: false,
        data: {
            Remitente: {
                type: "string",
                required: false,
                size: "col-10",
            },
            "Teléfono vendedor": {
                type: "string",
                required: false,
                size: "col-10",
            },
            "Correo electrónico vendedor": {
                type: "string",
                required: false,
                size: "col-10",
            },
        },
    },
];

const formDetail = (props) => {
    return (
        <Card className="">
            <CardContent>
                <GeneratorReport type={props.isDoor ? "puertas" : "ruedas"} steps={props.isDoor ? stepDoor : stepWheel} cart={props.isDoor ? props.cart : props.data} />
            </CardContent>
        </Card>
    );
};

export default formDetail;
