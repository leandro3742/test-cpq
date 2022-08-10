import React, { useState, useEffect } from "react";
import { componentController } from "../../features/componentController";
import { SelectWidget } from "../widgets/selectWidget";
// Material-ui
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";

export const PreviewPortSelector = (props) => {
    const [value, setValue] = useState(0);
    const [portNumber, setPortNumber] = useState([""]);
    const [components, setComponents] = useState([]);

    useEffect(() => {
        console.log(props);
        // if (props.preview) {
        setPortNumber(props.preview.cantPorts);
        setComponents(props.preview.components);
    }, []);

    useEffect(() => {
        setPortNumber(props.preview.cantPorts);
        setComponents(props.preview.components);
    }, [props]);

    const changePortValue = (state) => {
        let aux = [];
        for (let i in state) {
            if (state[i].selected) aux[i] = state[i].selected.name;
            else aux[i] = "";
        }
    };

    const handleChange = (e) => {
        let component = componentController.getComponent(e.target.value);
    };

    useEffect(() => {
        setPortNumber(changePortValue(portNumber));
    }, [value]);
    return (
        <>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                {portNumber.map((elem, iterator) => {
                    let portNumber = parseInt(iterator) + 1;
                    return <BottomNavigationAction key={iterator} label={"Port " + portNumber} icon={<RestoreIcon />} />;
                })}
            </BottomNavigation>

            {portNumber.length > 0 && <SelectWidget value={portNumber[value]} name={value.toString()} array={components} handleChange={handleChange} />}
        </>
    );
};
