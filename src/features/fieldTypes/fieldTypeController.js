import { dic } from './fieldDefinitions'

const fieldTypeController = {
  setField(field) {
    this.fieldSet[field.fieldName] = field;
  },
  getNames() {
    return Object.keys(this.fieldSet);
  },
  getType(field) {
    return this.fieldSet[field].type;
  },
  getWidgetConfig(field) {
    return this.fieldSet[field].widgetConfig;
  },
  serialize(fieldName, field) {
    return this.fieldSet[fieldName].serializer(field)
  },
  fieldSet: {},
};

dic.forEach(fieldType => fieldTypeController.setField(fieldType))
// fieldTypeController.setField("ports", "ports", dic.ports)


export { fieldTypeController };
