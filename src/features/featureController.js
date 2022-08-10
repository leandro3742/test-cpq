import { Antenna } from "../mock/gtt/components/antenna";
import { InternalAccesory } from "../mock/gtt/components/internalAccesory";

const featureController = {
    setFeature(schema) {
        this.featureSet[schema.id] = schema;
    },
    deleteFeature(featureId) {
        delete this.featureSet[featureId];
    },
    getFeature(feature) {
        return this.featureSet[feature];
    },
    getFeatureByName(featureName) {
        let features = this.featureSet;
        for (let i in features) {
            if (features[i].title === featureName) return features[i];
        }
    },
    getFeatureProperties(featureName) {
        let feature = this.getFeatureByName(featureName);
        const aux = [];
        for (let i in feature.properties) {
            aux.push(i);
        }
        return aux;
    },
    getPropertyTypeByName(featureName, property) {
        let feature = this.getFeatureByName(featureName);
        return feature.properties[property].type;
    },
    getAllNameFeatures() {
        let aux = [];
        let features = this.featureSet;
        for (let i in features) {
            aux.push(features[i].title);
        }
        return aux;
    },
    getAllFeature() {
        return this.featureSet;
    },
    featureSet: {},
};
// featureController.setFeature(PcbConnector);
featureController.setFeature(Antenna);
// featureController.setFeature(Enclosure);
// featureController.setFeature(DataPower);
featureController.setFeature(InternalAccesory);
// featureController.setFeature(Example);
// featuresEssen.forEach((elem) => {
//     featureController.setFeature(elem);
// });
// arrFeatures.forEach((elem) => {
//     featureController.setFeature(elem);
// });
export { featureController };
