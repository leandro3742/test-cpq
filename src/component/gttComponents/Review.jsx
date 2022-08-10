import React, { useState, useEffect } from "react";

import _ from "lodash";
const aux = (elem, key, val, father) => {
    let ret = val;
    for (let i in elem) {
        let num = parseInt(i) + 1;
        if (elem[i].selected) {
            if (elem[i].ports) {
                for (let j in elem[i].ports) {
                    aux(elem[i].ports[j], j, val, "Port " + key + " " + num);
                }
            }
            ret.push({ name: "Port " + key + " " + num, selected: elem[i].selected, father: father });
        }
    }
    return ret;
};
const returnChild = (elem) => {
    let children = [];
    let father = Object.keys(elem)[0];
    for (let i in elem) {
        if (Object.keys(elem[i].ports).length > 0) {
            for (let j in elem[i].ports) {
                children = aux(elem[i].ports[j], j, [], father);
                return children;
            }
        }
    }
    return children;
};

export const Review = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        let state = props.state.hard;
        setData(returnChild(state));
    }, [props.state.hard]);
    return (
        <>
            {_.map(data, (elem, key) => {
                return (
                    <div key={key}>
                        <span>{elem.name}</span>
                        <span>{elem.father}</span>

                        {/* <h3>{key}: </h3>
                        <span>{elem.selected.name}</span> */}
                    </div>
                );
            })}
        </>
    );
};
