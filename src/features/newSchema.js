import { fieldTypeController } from "./fieldTypes/fieldTypeController";

export const featureSchema = (number = 10) => {
  if (number <= 0) return;
  return {
    type: "object",
    required: ["events", "name feature"],
    properties: {
      id: {
        type: "string",
        hidden: true,
      },
      "name feature": {
        type: "string"
      },
      fields: {
        type: "array",
        widget: "GenericList",
        default: [],
        view: {
          sizeXs: 12,
          sizeMd: 12,
          btnSize: "small",
        },
        items: {
          type: "object",
          properties: {
            info: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  view: {
                    sizeXs: 12,
                  },
                },
                fieldType: {
                  allOf: [
                    {
                      type: "object",
                       properties: {
                        "field type": {
                          type: "string",
                          widget: "Select",
                          enum: fieldTypeController.getNames(),
                          view: {
                            sizeXs: 12,
                          },
                        },
                      },
                      allOf:
                        fieldTypeController.getNames().map(k => {
                          return {
                            if: {
                              properties: {
                                "field type": {
                                  type: "string",
                                  const: k,
                                },
                              },
                            },
                            then: {
                              properties: fieldTypeController.getWidgetConfig(k)
                            }
                          }
                        }
                        )
                    }
                  ],
                },
              },
            },
          },
        },
      },
    },
  };
};
