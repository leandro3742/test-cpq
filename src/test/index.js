import Ajv from "ajv"
const ajv = (exports.ajv = new Ajv());

const data = {
  "$id": "cpq://id_client/dsada",
  "title": "dsada",
  "type": "object",
  "properties": {
    "dsadsa": {
      "type": "string",
      "predicate": {
        "schemas": [
          "Antenna"
        ],
        "fields": [
          "name",
          "desc"
        ],
        "operators": [
          "$eq",
          "$ne"
        ],
        "values": [
          "das",
          "sadasdas"
        ]
      }
    }
  },
  "required": [],
  "additionalProperties": false
}

const schemaFeature = {
  $id: "cpq://general/feature",
  title: "feature",
  type: "object",
  properties: {
    $id: { type: "string" },
    title: { type: "string" },
    type: { type: "string" },
    properties: {
      type: "object",
      additionalProperties: {
        allOf: [
          { $ref: "cpq://general/fields/number" },
          { $ref: "cpq://general/fields/string" },
          { $ref: "cpq://general/fields/enum" },
          { $ref: "cpq://general/fields/port" },
        ],
      },
    },
    additionalProperties: { type: "boolean" },
    required: { type: "array" },
  },
  additionalProperties: false,
  required: ["$id", "title", "type", "properties"],
  $defs: {
    number: {
      $id: "cpq://general/fields/number",
      title: "number field",
      type: "object",
      properties: {
        type: { type: "string" },
        minimum: { type: "number" },
        maximum: { type: "number" },
        required: { type: "boolean" },
      },
    },
    string: {
      $id: "cpq://general/fields/string",
      title: "string field",
      type: "object",
      properties: {
        type: { type: "string" },
        maximum: { type: "string" },
        required: { type: "boolean" },
      },
    },
    enum: {
      $id: "cpq://general/fields/enum",
      title: "enum field",
      type: "object",
      properties: {
        type: { type: "string" },
        enum: {
          type: "array",
          items: { type: "string" },
        },
        widget: {
          type: "string",
          enum: ["SimpleList", "Select", "SelectMulti", "OptionsCheck"],
        },
        required: { type: "boolean" },
      },
    },
    port: {
      $id: "cpq://general/fields/port",
      title: "port field",
      type: "object",
      properties: {
        name: { type: "string" },
        ports: {
          type: "array",
          items: {
            type: "object",
            properties: {
              predicate: {
                $ref: "cpq://general/fields/predicate"
              },
              // schemas: { type: "string"},
            }
          },
        },
        "predicate": {
          $id: "cpq://general/fields/predicate",
          title: "predicate",
          type: "object",
          properties: {
            values: { type: "array", items: { type: "string" } },
            operators: {
              type: "array",
              items: {
                type: "string",
                enum: ["$eq", "$gt", "$gte", "$ne", "$lt", "$lte", "$where"]
              }
            },
            fields: { type: "array", items: { type: "string" } },
            schemas: {
              type: "array",
              items: {
                type: "string",
                enum: ["Antenna"]
              }
            },
          }
        }
      },
    },
    required: { type: "boolean" },
  },
};

const validate = ajv.compile(schemaFeature);
const valid = validate(data);
console.log(valid);
if (!valid) console.log(validate.errors);

