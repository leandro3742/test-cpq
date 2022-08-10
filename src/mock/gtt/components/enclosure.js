// export const Enclosure = {
//     "id": 3,
//     "type": "object",
//     "title": "Enclosure",
//     "properties": {
//       "name": {
//         "type": "string",
//         "view": {
//           "sizeMd": 6
//         }
//       },
//       "image": {
//         "type": "string",
//         "view": {
//           "sizeMd": 6
//         }
//       },
//       "description": {
//         "type": "string",
//         "view": {
//           "sizeMd": 6
//         }
//       },
//       "cantPorts": {
//         "type": "integer",
//         "minimum": 1,
//         "maximum": 10,
//         "default": 1,
//         "view": {
//             "sizeMd": 6
//         }
//       }
//     },
//     "required": [
//       "name",
//       "cantPorts"
//     ]
// }

export const Enclosure = {
  id: "cpq://id_client/enclosure",
  title: "enclosure",
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    descrition: {
      type: "string",
    },
    ports: [
      {
        fieldName: "antenna",
        port: [
          {
            schemas: "antenna",
          },
        ],
      },
      {
        fieldName: "dataPower",
        port: [
          {
            schemas: "dataPower",
          },
        ],
      },
    ],
  },
  required: [],
  additionalProperties: false,
};
