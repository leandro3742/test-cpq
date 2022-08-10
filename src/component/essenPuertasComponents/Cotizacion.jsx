import React, { useEffect, useState } from "react";
import { Navigation } from "../reactComponents/Navigation";
import _ from "lodash";
import SelectWidget from "../widgets/select";

const dicNav = {};
const Cotizacion = (props) => {
    const [state, setState] = useState(props.state);
    const [hard, setHard] = useState();
    const [nav, setNav] = useState("");
    const [step, setStep] = useState(props.state);
    const [stepSelected, setStepSelected] = useState(-1);
    const [key, setKey] = useState("");

    useEffect(() => {
        if (state[nav]) setKey(state[nav].key);
    }, [nav]);

    useEffect(() => {
        setStep(
            _.map(props.state, (value, key) => {
                return { key: key, disabled: !value.enabled, dependency: value.dependency };
            })
        );
        let aux = {};
        _.each(props.state, (value, key) => {
            aux = Object.assign(aux, { [key]: "" });
        });
        setHard(aux);
    }, []);

    const handleChange = (e) => {
        setHard({ ...hard, [key]: e.target.value });
    };

    useEffect(() => {
        let aux = JSON.parse(JSON.stringify(step));
        let entra = false;
        for (let i in hard) {
            if (hard[i] !== "") {
                entra = true;
                //Existe un valor
                //Recorrer los elementos para ver si tengo que activar alguno
                _.each(aux, (elem) => {
                    elem.dependency.forEach((dependency) => {
                        if (dependency.key === i) {
                            if (dependency.value.indexOf(hard[i]) !== -1) elem.disabled = false;
                            else elem.disabled = true;
                        }
                    });
                });
            }
        }
        if (entra) setStep(aux);
    }, [hard]);
    return (
        <div>
            <Navigation active={stepSelected} steps={step} setNav={setNav} />
            {nav && (
                <div className="col-5">
                    {key !== "" && (
                        <div className="row d-flex justify-content-center text-center">
                            <h1>{props.state[key].question}</h1>
                            <div className="col-5">
                                <SelectWidget handleChange={handleChange} value={{ name: hard[state[key].key] }} name={state[key].question} array={state[key].answer} />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Cotizacion;
