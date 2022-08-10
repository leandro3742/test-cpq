const antennaWifi = {
    value: {
        name: "antenna Wifi",
        description: "antenna wifi ....",
        "pcb connector": {
            cantPorts: 2,
            components: ["UFL -150mm Cable", "UFL -200mm Cable", "UFL -250mm Cable"]
        }
    },
    schema: "cpq://id_client/antenna"
}

const antenna4G = {
    value: {
        name: "antenna 4G (LTE)",
        description: "antenna wifi ....",
        "pcb connector": {
            cantPorts: 1,
            components: ["UFL -150mm Cable", "UFL -200mm Cable", "UFL -250mm Cable"]
        }
    },
    schema: "cpq://id_client/antenna"
}
const antennaLoRa = {
    value: {
        name: "LoRa antenna",
        description: "antenna wifi ....",
        "pcb connector": {
            cantPorts: 1,
            components: ["UFL -150mm Cable", "UFL -200mm Cable", "UFL -250mm Cable"]
        }
    },
    schema: "cpq://id_client/antenna"
}
const antennaDSRC = {
    value: {
        name: "DSRC Urban antenna",
        description: "antenna wifi ....",
        "pcb connector": {
            cantPorts: 1,
            components: ["UFL -150mm Cable", "UFL -200mm Cable", "UFL -250mm Cable"]
        }
    },
    schema: "cpq://id_client/antenna"
}
export const antennaComponents = [antennaWifi, antenna4G, antennaLoRa, antennaDSRC];
