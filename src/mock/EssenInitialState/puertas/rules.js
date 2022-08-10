const rules = [
    {
        rule: { columnName: "Hojas", values: ["1H Batiente", "1H Corredera"] },
        enable: { columnName: "Medidas Hueco de obra HO* (Ancho)", values: ["680", "780", "890", "980", "1010", "1080", "1180", "1280"] },
    },
    {
        rule: { columnName: "Hojas", values: ["2H Batiente"] },
        enable: { columnName: "Medidas Hueco de obra HO* (Ancho)", values: ["1225", "1325", "1425", "1525", "1635", "1745", "1835", "1925", "2025", "2125", "2225", "2325"] },
    },
];

module.exports = rules;
