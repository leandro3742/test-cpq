import React, { useEffect, useState } from "react";
import SelectWidget from "../widgets/select";
import _ from "lodash";
const Mirillas = (props) => {
    const [state, setState] = useState(props.state);
    const [steps, setSteps] = useState({});

    useEffect(() => {
        setState(props.state);
    }, [props.state]);

    useEffect(() => {
        let aux = {};
        _.each(props.state, (elem, key) => {
            aux[key] = "";
        });
        if (!Object.keys(props.hard).includes(Object.keys(aux)[0])) props.setHard({ ...props.hard, ...aux });
    }, []);

    useEffect(() => {
        let obj = {};
        _.each(state, (elem, key) => {
            _.each(elem, (value) => {
                if (value.enabled) {
                    obj[key] ? (obj[key] = [...new Set(obj[key].concat(value.answer))]) : (obj[key] = value.answer);
                }
            });
        });
        setSteps(obj);
    }, [state]);

    const handleChange = (e) => {
        let name = e.target.name.split(",")[1];
        props.setHard({ ...props.hard, [name]: e.target.value });
    };

    useEffect(() => {
        let aux = JSON.parse(JSON.stringify(state));
        let entra = false;
        let valuesSelected = {};
        for (let i in props.hard) {
            if (props.hard[i] !== "") {
                //Entra si es hijo de hijo
                if (aux[i]) {
                    for (let j in aux[i]) {
                        let step = aux[i];
                        if (step[j].answer && step[j].answer.includes(props.hard[i])) {
                            valuesSelected[step[j].key] = props.hard[i];
                        }
                    }
                } else {
                    valuesSelected[i] = props.hard[i];
                }
                entra = true;
            }
        }
        if (entra) {
            for (let i in aux) {
                if (!aux[i].key) {
                    for (let j in aux[i]) {
                        if (aux[i][j].dependency.length > 0) {
                            let entra2 = false;
                            let disabled = false;
                            _.each(aux[i][j].dependency, (dependency) => {
                                if (Object.keys(valuesSelected).includes(dependency.key)) {
                                    entra2 = true;
                                    if (dependency.value.includes(valuesSelected[dependency.key]) && !disabled) aux[i][j].enabled = true;
                                    else {
                                        disabled = true;
                                        aux[i][j].enabled = false;
                                    }
                                }
                            });
                            if (!entra2) aux[i][j].enabled = false;
                        }
                    }
                } else {
                    for (let j in aux[i]) {
                        console.log(aux[i][j]);
                        if (aux[i][j].dependency.length > 0) {
                            let entra2 = false;
                            _.each(aux[i][j].dependency, (dependency) => {
                                if (Object.keys(valuesSelected).includes(dependency.key)) {
                                    entra2 = true;
                                    if (dependency.value.includes(valuesSelected[dependency.key])) aux[i][j].enabled = true;
                                    else aux[i][j].enabled = false;
                                }
                            });
                            if (!entra2) aux[i][j].enabled = false;
                        }
                    }
                }
            }
        }
        if (entra) setState(aux);
    }, [props.hard]);

    return (
        <div className="">
            <div className="row d-flex justify-content-center text-center">
                {console.log(steps)}
                {Object.keys(steps).length > 0 &&
                    _.map(steps, (value, key) => {
                        return (
                            <div key={key} className="row d-flex justify-content-center text-center">
                                <h1>{key}</h1>
                                <div className="col-5">
                                    <SelectWidget handleChange={handleChange} value={{ name: props.hard[key] }} name={key} array={value} />
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Mirillas;
