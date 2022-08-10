const usb = {
    value: {
        name: "USB 3.0 Module (2x6 pin connector)"
    },
    schema: "cpq://id_client/dataPower"
}

const pinModule = {
    value: {
        name: "3 Pin (LV) Power Module"
    },
    schema: "cpq://id_client/dataPower"
}

const greenLed = {
    value: {
        name: "3 X Green LED + Micro USB + Reset Modu"
    },
    schema: "cpq://id_client/dataPower"
}

const test = {
    "value": {
        "internal port": {
            "cantPorts": 2,
            "components": [
                "Data cable 2x6 pin to 2x6 -150mm"
            ]
        },
        "name": "sada"
    },
    "schema": "cpq://id_client/dataPower"
}

export const dataPowerComponents = [usb, pinModule, greenLed, test]