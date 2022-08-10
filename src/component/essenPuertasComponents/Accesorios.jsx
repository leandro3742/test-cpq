import React, { useEffect, useState } from "react";
import { Navigation } from "../reactComponents/Navigation";
import _ from "lodash";
import SelectWidget from "../widgets/select";
import objectPath from "object-path";
import BarrasAntipanico from "./BarrasAntipanico";
import Mirillas from "./Mirillas";

const dicNav = {
    Mirillas(state, hard, setHard) {
        return <Mirillas state={state} hard={hard} setHard={setHard} />;
    },
    "Barras antipánico"(state, hard, setHard) {
        return <BarrasAntipanico state={state} hard={hard} setHard={setHard} />;
    },
    "Dispositivos electromagnéticos"(state, hard, setHard) {
        return <Mirillas state={state} hard={hard} setHard={setHard} />;
    },
    "Selector de cierre"(state, hard, setHard) {
        return;
    },
    "Cerraduras cortafuego"(state, hard, setHard) {
        return;
    },
    Cilindros(state, hard, setHard) {
        return;
    },
    Cierrapuertas(state, hard, setHard) {
        return;
    },
    Manillas(state, hard, setHard) {
        return;
    },
};
const Accesorios = (props) => {
    const [nav, setNav] = useState("");
    const [step, setStep] = useState(Object.keys(props.state));
    const [stepSelected, setStepSelected] = useState(-1);
    useEffect(() => {
        setStep(Object.keys(props.state));
    }, [props.state]);
    return (
        <div>
            <Navigation showDisabled={false} active={stepSelected} steps={step} setNav={setNav} />
            {nav && <Mirillas state={props.state[nav]} hard={props.hard} setHard={props.setHard} />}
        </div>
    );
};

export default Accesorios;
