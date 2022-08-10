import React, { useEffect, useState } from "react";
import { Navigation } from "../reactComponents/Navigation";
import _ from "lodash";
import SelectWidget from "../widgets/select";

const Puertas = (props) => {
    const [nav, setNav] = useState("");
    const [step, setStep] = useState([]);

    const createSteps = () => {
        let aux = JSON.parse(JSON.stringify(props.state));
        let aux2 = {};
        _.each(aux, (elem, key) => {
            if (elem.type === "filter") {
                elem = props.filtersData[elem.key];
                elem.type = "filter";
                aux2[key] = elem;
            } else {
                let aux3 = elem;
                _.each(elem.values, (child, childKey) => {
                    if (child.type === "filter") {
                        child = props.filtersData[child.key];
                        child.type = "filter";
                        elem.values[childKey] = child;
                    }
                });
                aux2[key] = aux3;
            }
        });
        return aux2;
    };

    useEffect(() => {
        setStep(createSteps());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.state]);
    useEffect(() => {
        setStep(createSteps());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.filtersData]);

    const handleChange = (e, objKey) => {
        if (objKey) {
            props.setHard({ ...props.hard, [objKey]: e.target.value });
        } else props.setHard({ ...props.hard, [props.filtersData[nav].key]: e.target.value });
    };

    const validateFilters = (key, value) => {
        let aux = {};
        _.each(props.filtersData, (filter, filterKey) => {
            if (filter.dependency.length > 0) {
                let count = 0;
                _.each(filter.dependency, (dependency) => {
                    for (let i in props.hard) {
                        if (props.hard[i] !== "") {
                            if (dependency.key === i && dependency.value.includes(props.hard[i])) {
                                count++;
                            } else if (dependency.key === i && !dependency.value.includes(props.hard[i])) {
                                filter.enabled = false;
                            }
                        }
                    }
                });
                if (count === filter.dependency.length) filter.enabled = true;
            }
            aux[filterKey] = filter;
        });

        props.setFiltersData(aux);
    };
    useEffect(() => {
        let entra = false;
        for (let i in props.hard) {
            if (props.hard[i] !== "") {
                entra = true;
            }
        }
        if (entra) validateFilters();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.hard]);

    return (
        <div>
            <Navigation showDisabled={true} steps={step} setNav={setNav} />
            {nav && props.state[nav] && props.state[nav].type === "filter" && (
                <div className="m-auto">
                    <div className="mt-5 row d-flex justify-content-center text-center">
                        <h1>{props.filtersData[nav].question}</h1>
                        <div className="col-5">
                            <SelectWidget handleChange={(e) => handleChange(e)} value={{ name: props.hard[props.filtersData[nav].key] ? props.hard[props.filtersData[nav].key] : "" }} name={props.filtersData[nav].question} array={props.filtersData[nav].answer} />
                        </div>
                    </div>
                </div>
            )}

            {nav && props.state[nav] && props.state[nav].type === "object" && (
                <div className="row d-flex justify-content-center text-center">
                    {_.map(props.state[nav].values, (elem, key) => {
                        let filter = props.filtersData[elem.key];
                        if (filter.enabled) {
                            let answer = [];
                            for (let i in filter.answer) {
                                if (!answer.includes(filter.answer[i])) {
                                    answer.push(filter.answer[i]);
                                }
                            }
                            return (
                                <div key={filter.key} className="mt-5">
                                    <h1>{filter.question}</h1>
                                    <div className="m-auto col-5">
                                        <SelectWidget key={filter.key} handleChange={(e) => handleChange(e, filter.key)} value={{ name: props.hard[filter.key] ? props.hard[filter.key] : "" }} name={filter.question} array={answer} />
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            )}
        </div>
    );
};

export default Puertas;
