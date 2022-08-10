// export const DataPower = {
//     "id": 2,
//     "type": "object",
//     "title": "data/power",
//     "properties": {
//         "name": {
//           "type": "string",
//           "view": {
//             "sizeMd": 6
//           }
//         },
//         "image": {
//           "type": "string",
//           "view": {
//             "sizeMd": 6
//           }
//         },
//         "description": {
//           "type": "string",
//           "view": {
//             "sizeMd": 6
//           }
//         },
//         "children": [
//           {
//               "type": "object",
//               "items": {
//               "$ref": "cpq://id_client/antenna",
//               }
//           },
//           {
//               "type": "object",
//               "items": {
//                   "$ref": "cpq://id_client/dataPower",
//               }
//           }
//       ],
//         "accesory": {
//           "type": "string",
//           "widget": "Select",
//           "view": {
//             "sizeMd": 11
//           },
//           "enum": [
//             "accesory1",
//             "accesory2",
//             "accesory3",
//             "accesory4"
//           ]
//         }
//       },
//       "required": [
//         "name",
//         "accesory"
//       ]
// }

export const DataPower = {
  id: "cpq://id_client/dataPower",
  type: "object",
  title: "dataPower",
  properties: {
    name: {
      type: "string",
    },
    ports: [
      {
        fieldName: "internal port",
        port: [
          {
            predicate: "port1",
            schemas: "internal accesory"
          }
        ],
      }
    ],
  },
};
