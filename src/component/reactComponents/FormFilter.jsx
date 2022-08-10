import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { featureController } from "../../features/featureController";
import { saveFilters } from "../../redux/actions/views";
import { SelectWidget } from "../widgets/selectWidget";
import { SelectMultiWidget } from "../widgets/multiSelect";
import { TableWidget } from "../widgets/tableWidget";

export const FormFilter = (props) => {
    const [featureSelected, setFeatureSelected] = useState(""); //nombre de la feature
    const [filterName, setFilterName] = useState(""); //formulario para guardar, json
    const [featureProperties, setFeatureProperties] = useState([]); //las propiedades de la feature a renderizar
    const [propertySelected, setPropertySelected] = useState([]); //las propiedades seleccionadas para la tabla

    const featureNames = featureController.getAllNameFeatures();

    useEffect(() => {
        if (featureSelected !== "") setFeatureProperties(featureController.getFeatureProperties(featureSelected));
        setPropertySelected([]);
    }, [featureSelected]);

    const handleChange = (e) => {
        if (e.target.name === "feature") setFeatureSelected(e.target.value);
        if (e.target.name === "property") {
            setPropertySelected(
                e.target.value.map((nameProperty) => {
                    return { name: nameProperty, type: featureController.getPropertyTypeByName(featureSelected, nameProperty), value: "", expression: "" };
                })
            );
        }
    };
    const handleAdd = (property) => {
        setPropertySelected([...propertySelected, { ...property, value: "", expression: "" }]);
    };
    const handleDelete = (iterator) => {
        const aux = propertySelected.filter((val, i) => {
            if (iterator !== i) return val;
        });
        setPropertySelected(aux);
    };
    const handleValueProperty = (e, iterator) => {
        let aux = [];
        if (e.target.name === "exp") {
            aux = propertySelected.map((val, i) => {
                if (iterator === i) return { ...val, expression: e.target.value };
                return val;
            });
        }
        if (e.target.name === "value") {
            aux = propertySelected.map((val, i) => {
                if (iterator === i) return { ...val, value: e.target.value };
                return val;
            });
        }
        setPropertySelected(aux);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.dispatch(saveFilters({ name: filterName, feature: featureSelected, properties: propertySelected }));
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                className="my-3"
                placeholder="filter name"
                name="filterName"
                value={filterName}
                onChange={(e) => {
                    setFilterName(e.target.value);
                }}
            ></input>
            <div className="my-3">
                <SelectWidget name="feature" value={featureSelected} array={featureNames} handleChange={handleChange} />
            </div>
            <div className="my-3">
                <SelectMultiWidget name="property" itemName={propertySelected.map((v) => v.name)} items={featureProperties} handleChange={handleChange} />
            </div>
            <TableWidget feature={featureController.getFeatureByName(featureSelected)} arrayNames={["property", "expression", "values"]} rows={propertySelected} handleAdd={handleAdd} handleDelete={handleDelete} handleChange={handleValueProperty}></TableWidget>
            <Button variant="contained" type="submit">
                Save Filter
            </Button>
        </form>
    );
};
