const filters = [
    {
        Tipo: "Multiuso",
        Hojas: "1H Batiente",
        "Resistencia al fuego": "El2-60 C5",
        "Medidas Hueco de obra HO* (Ancho)": "680",
        "Medidas Hueco de obra HO* (Alto)": "2050",
        "Apertura / Apertura activa": "Derecha",
    },
    {
        Tipo: "Cortafuego",
        Hojas: "2H Batiente",
        "Resistencia al fuego": "El2-90 C5",
        "Medidas Hueco de obra HO* (Ancho)": "780",
        "Medidas Hueco de obra HO* (Alto)": "2150",
        "Apertura / Apertura activa": "Izquierda",
    },
    {
        Tipo: "",
        Hojas: "1H Corredera",
        "Resistencia al fuego": "El2-120 C5",
        "Medidas Hueco de obra HO* (Ancho)": "890",
        "Medidas Hueco de obra HO* (Alto)": "",
        "Apertura / Apertura activa": "Doble sentido",
    },
    {
        Tipo: "",
        Hojas: "",
        "Resistencia al fuego": "UL 90",
        "Medidas Hueco de obra HO* (Ancho)": "980",
        "Medidas Hueco de obra HO* (Alto)": "",
        "Apertura / Apertura activa": "",
    },
    {
        Tipo: "",
        Hojas: "",
        "Resistencia al fuego": "UL 120",
        "Medidas Hueco de obra HO* (Ancho)": "1010",
        "Medidas Hueco de obra HO* (Alto)": "",
        "Apertura / Apertura activa": "",
    },
    {
        Tipo: "",
        Hojas: "",
        "Resistencia al fuego": "UL 180",
        "Medidas Hueco de obra HO* (Ancho)": "1080",
        "Medidas Hueco de obra HO* (Alto)": "",
        "Apertura / Apertura activa": "",
    },
    {
        Tipo: "",
        Hojas: "",
        "Resistencia al fuego": "",
        "Medidas Hueco de obra HO* (Ancho)": "1180",
        "Medidas Hueco de obra HO* (Alto)": "",
        "Apertura / Apertura activa": "",
    },
    {
        Tipo: "",
        Hojas: "",
        "Resistencia al fuego": "",
        "Medidas Hueco de obra HO* (Ancho)": "1280",
        "Medidas Hueco de obra HO* (Alto)": "",
        "Apertura / Apertura activa": "",
    },
    {
        Tipo: "",
        Hojas: "",
        "Resistencia al fuego": "",
        "Medidas Hueco de obra HO* (Ancho)": "1225",
        "Medidas Hueco de obra HO* (Alto)": "",
        "Apertura / Apertura activa": "",
    },
    {
        Tipo: "",
        Hojas: "",
        "Resistencia al fuego": "",
        "Medidas Hueco de obra HO* (Ancho)": "1325",
        "Medidas Hueco de obra HO* (Alto)": "",
        "Apertura / Apertura activa": "",
    },
    {
        Tipo: "",
        Hojas: "",
        "Resistencia al fuego": "",
        "Medidas Hueco de obra HO* (Ancho)": "1425",
        "Medidas Hueco de obra HO* (Alto)": "",
        "Apertura / Apertura activa": "",
    },
    {
        Tipo: "",
        Hojas: "",
        "Resistencia al fuego": "",
        "Medidas Hueco de obra HO* (Ancho)": "1525",
        "Medidas Hueco de obra HO* (Alto)": "",
        "Apertura / Apertura activa": "",
    },
    {
        Tipo: "",
        Hojas: "",
        "Resistencia al fuego": "",
        "Medidas Hueco de obra HO* (Ancho)": "1625",
        "Medidas Hueco de obra HO* (Alto)": "",
        "Apertura / Apertura activa": "",
    },
    {
        Tipo: "",
        Hojas: "",
        "Resistencia al fuego": "",
        "Medidas Hueco de obra HO* (Ancho)": "1745",
        "Medidas Hueco de obra HO* (Alto)": "",
        "Apertura / Apertura activa": "",
    },
    {
        Tipo: "",
        Hojas: "",
        "Resistencia al fuego": "",
        "Medidas Hueco de obra HO* (Ancho)": "1832",
        "Medidas Hueco de obra HO* (Alto)": "",
        "Apertura / Apertura activa": "",
    },
    {
        Tipo: "",
        Hojas: "",
        "Resistencia al fuego": "",
        "Medidas Hueco de obra HO* (Ancho)": "1925",
        "Medidas Hueco de obra HO* (Alto)": "",
        "Apertura / Apertura activa": "",
    },
    {
        Tipo: "",
        Hojas: "",
        "Resistencia al fuego": "",
        "Medidas Hueco de obra HO* (Ancho)": "2025",
        "Medidas Hueco de obra HO* (Alto)": "",
        "Apertura / Apertura activa": "",
    },
    {
        Tipo: "",
        Hojas: "",
        "Resistencia al fuego": "",
        "Medidas Hueco de obra HO* (Ancho)": "2125",
        "Medidas Hueco de obra HO* (Alto)": "",
        "Apertura / Apertura activa": "",
    },
    {
        Tipo: "",
        Hojas: "",
        "Resistencia al fuego": "",
        "Medidas Hueco de obra HO* (Ancho)": "2225",
        "Medidas Hueco de obra HO* (Alto)": "",
        "Apertura / Apertura activa": "",
    },
    {
        Tipo: "",
        Hojas: "",
        "Resistencia al fuego": "",
        "Medidas Hueco de obra HO* (Ancho)": "2325",
        "Medidas Hueco de obra HO* (Alto)": "",
        "Apertura / Apertura activa": "",
    },
];

const getColumnNames = (filters) => {
    let obj = {};
    for (let j in filters[0]) {
        obj[j] = [];
    }
    return obj;
};

const createFilters = (filters, columns) => {
    for (let i in filters) {
        for (let j in filters[i]) {
            if (!columns[j].includes(filters[i][j]) && filters[i][j] !== "") {
                columns[j].push({ value: filters[i][j], dependency: [] });
            }
        }
    }
    return columns;
};

import _ from "lodash";

const addDependencies = (filters, rules) => {
    for (let i in rules) {
        let rule = rules[i].rule;
        let enable = rules[i].enable;

        _.each(filters, (elem, key) => {
            if (key === enable.columnName) {
                _.each(elem, (filter) => {
                    if (enable.values.includes(filter.value)) {
                        filter.dependency.push({ key: rule.columnName, value: rule.values });
                    }
                });
            }
        });
        console.log(filters);
    }
};
const rules = require("./rules");
let obj = createFilters(filters, getColumnNames(filters));
// console.log(obj);
addDependencies(obj, rules);
