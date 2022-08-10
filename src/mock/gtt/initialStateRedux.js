export const initialStateGtt = {
    hard: {},
    help: {
        // listEnclosure: 12
    },
    soft: {
        listEnclosure: { key: "enclosure", children: ["listAntenna", "listDataPower", "listCompleteYourBuild"], father: "", enabled: true },
        listAntenna: { key: "antenna", children: ["listPcbConnector"], father: "listEnclosure", enabled: false },
        listPcbConnector: { key: "pcb connector", children: [], father: "listAntenna", enabled: false },
        listDataPower: { key: "dataPower", children: [], father: "listCompleteYourBuild", enabled: false },
        listCompleteYourBuild: { key: "completeYourBuild", children: [], father: "", enabled: false },
    },
};

// const softA = {
//     enclosure: {ref: "enclosure", value: objectPath.get(a, "enclosure.selected")},
//     antenna: objectPath.get(a, "enclosure.ports.antenna"),
//     dataPower: objectPath.get(a, "enclosure.ports.dataPower"),
//     completeYourBuild: objectPath.get(a, "enclosure.ports.completeYourBuild"),
//     pcbConnector: objectPath.get(a, "enclosure.ports.antenna.ports.pcbConnector"),
// }
