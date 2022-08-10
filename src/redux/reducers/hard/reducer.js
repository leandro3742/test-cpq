import { createReference } from "../../../utils/gtt";

const initialState = {};
import objectPath from "object-path";
export default function reducers(state = initialState, action) {
    switch (action.type) {
        case "SET_INITIAL_STATE_HARD":
            return { ...state, ...action.payload };
        case "SET_HARD":
            let stateSoft = action.payload.stateSoft;
            let stateHelp = action.payload.stateHelp;
            let soft = stateSoft[action.payload.soft];
            let auxComponent = action.payload.component;
            for (let i in stateSoft) {
                if (stateSoft[i].key === action.payload.soft) {
                    soft = stateSoft[i];
                }
            }
            console.log(stateSoft);
            console.log(soft);
            let ports = {};
            let selected = {};

            for (let i in auxComponent) {
                if (typeof auxComponent[i] === "object") {
                    let aux = [];
                    aux.length = auxComponent[i].cantPorts;
                    aux.fill(auxComponent[i]);
                    ports[i] = aux;
                } else if (i === "name") selected[i] = auxComponent[i];
            }
            let component = {};
            Object.assign(component, { ports, selected });

            // //Paso base, elige el primer componente
            if (Object.keys(state).length === 0) {
                console.log(soft);
                objectPath.set(state, Object.keys(soft)[0], component);
            } else {
                let referenceInArray = createReference(stateHelp, stateSoft, soft);
                let getState = objectPath.get(state, referenceInArray);
                component.components = getState.components;
                objectPath.set(state, referenceInArray, component);
            }

            return { ...state };
        default:
            return { ...state };
    }
}
