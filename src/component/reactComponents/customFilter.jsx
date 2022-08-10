import React, { useState, useEffect } from "react";
import TreeView from "@mui/lab/TreeView";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { ControllerSelected } from "../widgets/controllerSelected";
import { StyledTreeItem } from "../viewBuilder/toolBox";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { buildHeaderProperties, fetchApi } from "../../redux/sagas/api/utils";
import Radio from '@mui/material/Radio';


export const CustomFilter = (props) => {
    const [properties, setProperties] = useState([]);
    const [values, setValues] = useState([]);
    const [featureSelected, setFeatureSelected] = useState("");
    const [propertySelected, setPropertySelected] = useState("");
    const [valueSelected, setValueSelected] = useState("");
    const [operationSelected, setOperationSelected] = useState("like");

    const typeOfValues = (arr) => {
        for (const iterator of arr) {
            if (typeof iterator === 'string') {
                return "text"
            }
        }
        return "number"
    }
    useEffect(() => {
        if (featureSelected) {
            fetchApi(buildHeaderProperties({ feature: featureSelected }), `${import.meta.env.VITE_BACKEND_SERVICE}/api/component/property`).then((result) => setProperties(result.data));
        }
    }, [featureSelected]);

    useEffect(() => {
        if (propertySelected) {
            fetchApi(buildHeaderProperties({ feature: featureSelected, property: propertySelected }), `${import.meta.env.VITE_BACKEND_SERVICE}/api/component/propertyValues`).then((result) => {
                setValues(result.data);
            });
        }
        setOperationSelected("like")
    }, [featureSelected, propertySelected]);

    return (
        <TreeView aria-label="gmail" defaultExpanded={["3"]} defaultCollapseIcon={<ArrowDropDownIcon />} defaultExpandIcon={<ArrowRightIcon />} defaultEndIcon={<div style={{ width: 24 }} />} className="m-3">
            <StyledTreeItem labelIcon={""} nodeId={"Filtro personalizado"} labelText={"Filtro personalizado"}>
                <div className="m-2">
                    <ControllerSelected name={"feature"} value={featureSelected} array={props.features} handleChange={setFeatureSelected} />
                </div>
                <div className="m-2">{featureSelected && <ControllerSelected name={"property"} value={propertySelected} array={properties} handleChange={setPropertySelected} />}</div>
                <div className="m-2">
                    {propertySelected && <TextField variant="outlined" label="Value" name={"value"} type={typeOfValues(values)} value={valueSelected} onChange={(e) => {
                        if (typeOfValues(values) === "number") {
                            setValueSelected(e.target.value - 0)
                        }
                        else {
                            setValueSelected(e.target.value)
                        }
                    }} />}
                    {propertySelected && typeOfValues(values) === "number" && <>
                        <div><Radio
                            checked={operationSelected === 'greater'}
                            onChange={(e) => setOperationSelected(e.target.value)}
                            value="greater"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                            Mayor</div>
                        <div> <Radio
                            checked={operationSelected === 'less'}
                            onChange={(e) => setOperationSelected(e.target.value)}
                            value="less"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'B' }}
                        />Menor</div></>
                    }
                </div>
                <Button
                    onClick={() => {
                        props.handleChange(propertySelected, valueSelected, operationSelected);
                        setFeatureSelected("");
                        setPropertySelected("");
                        setOperationSelected("like")
                        setValueSelected("");
                    }}
                >
                    Buscar
                </Button>
            </StyledTreeItem>
        </TreeView>
    );
};
