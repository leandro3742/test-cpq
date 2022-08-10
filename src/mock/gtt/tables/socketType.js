const socketType = [
    {
        Name: "RF Enclosure Socket Type",
        "Suitable Components": "Antenna",
    },
    {
        Name: "RF Enclosure Socket Type",
        "Suitable Components": "No Antenna",
    },
    {
        Name: "M25 Enclosure Socket Type",
        "Suitable Components": "RJ11 Module",
    },
    {
        Name: "M25 Enclosure Socket Type",
        "Suitable Components": "RJ45 (Cat5e) Module",
    },
    {
        Name: "M25 Enclosure Socket Type",
        "Suitable Components": "RJ45 (Cat6) Module",
    },
    {
        Name: "M25 Enclosure Socket Type",
        "Suitable Components": "USB 3.0 Module (2x6 pin connector) Module",
    },
    {
        Name: "M25 Enclosure Socket Type",
        "Suitable Components": "3 pin (LV) Power Module",
    },
    {
        Name: "M25 Enclosure Socket Type",
        "Suitable Components": "3 pin (HV) Power Module",
    },
    {
        Name: "M25 Enclosure Socket Type",
        "Suitable Components": "LED Module 2x4 cable",
    },
    {
        Name: "M25 Enclosure Socket Type",
        "Suitable Components": "6 pin (LV) Power Module",
    },
    {
        Name: "M25 Enclosure Socket Type",
        "Suitable Components": "18 pin (Data) Module",
    },
    {
        Name: "M25 Enclosure Socket Type",
        "Suitable Components": "No M25 Component Required",
    },
    {
        Name: "M25 Enclosure Socket Type",
        "Suitable Components": "SIM Module",
    },
    {
        Name: "M25 Enclosure Socket Type",
        "Suitable Components": "LED Module 2x6 cable",
    },
    {
        Name: "M25 Enclosure Socket Type",
        "Suitable Components": "M25 to RF Interface Converter",
    },
    {
        Name: "M25 Enclosure Socket Type",
        "Suitable Components": "USB 3.0 Module (USB connector) Module",
    },
    {
        Name: "M25 Enclosure Socket Type",
        "Suitable Components": "Fibre Module",
    },
    {
        Name: "M25 Enclosure Socket Type",
        "Suitable Components": "SIM Module with Extender",
    },
    {
        Name: "M25 Enclosure Socket Type",
        "Suitable Components": "3xLED+MicroUSB",
    },
    {
        Name: "Lid Socket Type 1",
        "Suitable Components": "AC Lid",
    },
    {
        Name: "Bracket Socket Type",
        "Suitable Components": "Bracket",
    },
    {
        Name: "AC Mounting Socket Type",
        "Suitable Components": "AC PCB Mounting Plate",
    },
    {
        Name: "GLB Lid Socket Type",
        "Suitable Components": "GLB Lid",
    },
    {
        Name: "Formosa Lid Socket Type",
        "Suitable Components": "Formosa Lid",
    },
    {
        Name: "Antenna",
        "Suitable Components": "RF Cable Assembly",
    },
    {
        Name: "Antenna",
        "Suitable Components": "No Cable Required",
    },
    {
        Name: "External Accessory",
        "Suitable Components": "Cable Gland",
    },
    {
        Name: "External Accessory",
        "Suitable Components": "Knurled Cover with Chain",
    },
    {
        Name: "RJ45 (Cat5e) Internal Accessory",
        "Suitable Components": "RJ45 (Cat5e)  Internal Accessory",
    },
    {
        Name: "RJ11 Internal Accessory",
        "Suitable Components": "RJ11 Internal Accessory",
    },
    {
        Name: "RJ45 (Cat6) Internal Accessory",
        "Suitable Components": "RJ45 (Cat6) Internal Accessory",
    },
    {
        Name: "USB 3.00 Module (2x6 pin connector) Internal Accessory",
        "Suitable Components": "USB 3.0 Module (2x6 pin connector) Internal Accessory",
    },
    {
        Name: "3 pin (LV) Module Field Side",
        "Suitable Components": "3 pin (LV) Power Field Side",
    },
    {
        Name: "3 pin (HV) Module Field Side",
        "Suitable Components": "3 pin (HV) Power Field Side",
    },
    {
        Name: "LED Internal Accessory",
        "Suitable Components": "2x4 pin to 2x4 pin Accessory",
    },
    {
        Name: "Transparent M25 Cover",
        "Suitable Components": "Transparent Cover",
    },
    {
        Name: "6 pin (LV) Module Field Side",
        "Suitable Components": "6 pin (LV) Power Field Side",
    },
    {
        Name: "18 pin (Data) Module Field Side",
        "Suitable Components": "18 pin (Data) Module Field Side",
    },
    {
        Name: "GLB Mounting Socket Type",
        "Suitable Components": "GLB PCB Mounting Plate",
    },
    {
        Name: "Formosa Mounting Socket",
        "Suitable Components": "Formosa PCB Mounting Plate",
    },
    {
        Name: "No Antenna",
        "Suitable Components": "RF Cable Assembly",
    },
    {
        Name: "No Antenna",
        "Suitable Components": "Dummy Cover",
    },
    {
        Name: "No Antenna",
        "Suitable Components": "No Cable Required",
    },
    {
        Name: "RF Cable Assembly",
        "Suitable Components": "",
    },
    {
        Name: "RF Enclosure Socket Type 2",
        "Suitable Components": "",
    },
    {
        Name: "All M25 Covers",
        "Suitable Components": "Transparent Cover",
    },
    {
        Name: "All M25 Covers",
        "Suitable Components": "Non Transparent Cover",
    },
    {
        Name: "All M25 Covers",
        "Suitable Components": "Knurled Cover with Chain",
    },
    {
        Name: "2x4 pin to 2x4 pin ",
        "Suitable Components": "2x4 pin to 2x4 pin Accessory",
    },
    {
        Name: "All M25 External Accessories",
        "Suitable Components": "Cable Gland",
    },
    {
        Name: "All M25 External Accessories",
        "Suitable Components": "Transparent Cover",
    },
    {
        Name: "All M25 External Accessories",
        "Suitable Components": "Non Transparent Cover",
    },
    {
        Name: "All M25 External Accessories",
        "Suitable Components": "Knurled Cover with Chain",
    },
    {
        Name: "M25 to RF Interface Converter",
        "Suitable Components": "RF Cable Assembly",
    },
    {
        Name: "M25 to RF Interface Converter",
        "Suitable Components": "Dummy Cover",
    },
    {
        Name: "M25 to RF Interface Converter",
        "Suitable Components": "No Cable Required",
    },
    {
        Name: "USB 3.00 Module (USB connector) Internal Accessory",
        "Suitable Components": "USB 3.0 Module (USB connector) Internal Accessory",
    },
    {
        Name: "Fibre External Accessory",
        "Suitable Components": "Fibre Cable Gland",
    },
    {
        Name: "Knurled Cover with Chain",
        "Suitable Components": "Knurled Cover with Chain",
    },
    {
        Name: "USB External Accessory",
        "Suitable Components": "Transparent Cover",
    },
    {
        Name: "USB External Accessory",
        "Suitable Components": "Non Transparent Cover",
    },
    {
        Name: "USB External Accessory",
        "Suitable Components": "Knurled Cover with Chain",
    },
    {
        Name: "USB External Accessory",
        "Suitable Components": "USB Cable Gland",
    },
    {
        Name: "LED External Accessory",
        "Suitable Components": "Transparent Cover",
    },
    {
        Name: "LED External Accessory",
        "Suitable Components": "Knurled Cover with Chain",
    },
    {
        Name: "Surge Arrestor",
        "Suitable Components": "Surge Arrestor Required",
    },
    {
        Name: "Surge Arrestor",
        "Suitable Components": "Surge Arrestor Not Required",
    },
    {
        Name: "Vent Socket Type",
        "Suitable Components": "",
    },
    {
        Name: "2x2 pin to Micro USB",
        "Suitable Components": "2x2 pin housing to Mirco USB Accessory",
    },
    {
        Name: "Assembly",
        "Suitable Components": "Assembly",
    },
    {
        Name: "AC Assembly",
        "Suitable Components": "",
    },
];

module.exports = { socketType };
