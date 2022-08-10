import React, { useState, useEffect } from "react";
import { setPortSelected } from "../../redux/actions/gtt";
import { setSoft } from "../../redux/actions/soft";

import { createReference } from "../../utils/gtt";
import { componentController } from "../../features/componentController";
import { SelectWidget } from "../widgets/selectWidget";
// Material-ui
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";

import objectPath from "object-path";

export const PortSelector = (props) => {
    const [value, setValue] = useState(0);
    const [portNumber, setPortNumber] = useState([""]);
    const [components, setComponents] = useState([]);

    useEffect(() => {
        props.dispatch(setPortSelected({ softName: props.softName, value: value }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadData = () => {
        let auxHard = objectPath.get(props.hard, props.soft.key);
        if (!auxHard) {
            let referenceInArray = createReference(props.allState.help, props.allState.soft, props.softName);
            referenceInArray.length = referenceInArray.length - 1;
            auxHard = objectPath.get(props.allState.hard, referenceInArray);
        }
        let aux = [];
        for (let i in auxHard) {
            aux.push(auxHard[i].components);
        }
        setComponents(aux);
        setPortNumber(changePortValue(auxHard));
    };

    useEffect(() => {
        loadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props]);

    const changePortValue = (state) => {
        let aux = [];
        for (let i in state) {
            if (state[i].selected) aux[i] = state[i].selected.name;
            else aux[i] = "";
        }
        return aux;
    };

    const handleChange = (e) => {
        let component = componentController.getComponent(e.target.value);
        props.dispatch(setSoft({ component: component.value, soft: props.softName }));
    };

    return (
        <>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    props.dispatch(setPortSelected({ softName: props.softName, value: newValue }));
                    setValue(newValue);
                }}
            >
                {portNumber.map((elem, iterator) => {
                    let portNumber = parseInt(iterator) + 1;
                    return <BottomNavigationAction key={iterator} label={"Port " + portNumber} icon={<RestoreIcon />} />;
                })}
            </BottomNavigation>

            {portNumber.length > 0 && <SelectWidget value={portNumber[value]} name={value.toString()} array={components[value]} handleChange={handleChange} />}
        </>
    );
};
