import React, { useState } from "react";
import { StyledTreeItem } from "../viewBuilder/toolBox";
import { SelectWidget } from "../widgets/selectWidget";
import _ from "lodash";
// Material
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import TreeView from "@mui/lab/TreeView";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Filter } from "./filter";
import { CustomFilter } from "./customFilter";
import { changeFeature } from "../../redux/actions/gtt";
import { setFilter, removeAdvancedFilter, addAdvancedFilter } from "../../redux/actions/filters";

export const FilterBox = (props) => {
    const [arrFilters, setArrFilters] = useState([]);

    const handleChange = (e) => {
        if (e.target.name === "feature") {
            _.each(props.arrFeatures, (elem) => {
                if (elem.title === e.target.value) props.dispatch(changeFeature(elem));
            });
        }
    };

    const addFilter = (property, value, operation) => {
        props.dispatch(setFilter({ property, operation, value }));
    };
    const getNameFeatures = (features) => {
        return _.map(features, (elem) => {
            return elem.title;
        });
    };

    const setAdvancedFilter = (nameFilter, filters, type) => {
        if (type === "remove") {
            let aux = arrFilters;
            delete aux[nameFilter];
            setArrFilters(aux);
            props.dispatch(removeAdvancedFilter(filters));
        } else if (type === "add") {
            _.each(filters, (elem) => {
                elem.advancedFilters = true;
            });
            setArrFilters({ ...arrFilters, [nameFilter]: filters });
            props.dispatch(addAdvancedFilter(filters));
        }
    };

    return (
        <div className="row col-12">
            <div>
                {/* SHOW ACTIVE ADVANCED FILTERS  */}
                {_.map(arrFilters, (elem, key) => {
                    if (key)
                        return (
                            <div key={key} className="border rounded">
                                <span>{key}</span>
                                <DeleteForeverOutlinedIcon onClick={() => setAdvancedFilter(key, elem, "remove")} />
                            </div>
                        );
                })}

                {/* SHOW ACTIVE FILTERS */}
                {_.map(props.filters, (elem, key) => {
                    let operator = "";
                    if (elem.operation === "equals") operator = "=";
                    else if (elem.operation === "less") operator = "<";
                    else if (elem.operation === "greater") operator = ">";
                    else if (elem.operation === "like") operator = "=";
                    else operator = "";
                    if (!elem.advancedFilters)
                        return (
                            <div key={key} className="my-2 d-flex justify-content-center align-items-center border rounded">
                                <span>
                                    {elem.property} {operator} {elem.value}
                                </span>
                                <DeleteForeverOutlinedIcon onClick={() => props.dispatch(setFilter(elem))} />
                            </div>
                        );
                })}

                <div className="border rounded py-3 border-1">
                    {props.featureSelected && <SelectWidget className="d-flex justify-content-center" name={"feature"} value={props.featureSelected.title} array={getNameFeatures(props.arrFeatures)} handleChange={handleChange} />}
                    {_.map(props.filtersGroups, (elem, groupName) => {
                        return (
                            <TreeView key={groupName} aria-label="gmail" defaultExpanded={["3"]} defaultCollapseIcon={<ArrowDropDownIcon />} defaultExpandIcon={<ArrowRightIcon />} defaultEndIcon={<div style={{ width: 24 }} />} className="m-3">
                                <StyledTreeItem labelIcon={""} nodeId={"8"} labelText={groupName}>
                                    {_.map(elem, (filters, name) => {
                                        return (
                                            <div key={name}>
                                                <Filter
                                                    handleChange={() => {
                                                        if (!arrFilters[name]) setAdvancedFilter(name, filters.filters, "add");
                                                        else setAdvancedFilter(name, filters.filters, "remove");
                                                    }}
                                                    name={name}
                                                    rules={filters.filters}
                                                    isChecked={arrFilters[name] ? true : false}
                                                />
                                            </div>
                                        );
                                    })}
                                </StyledTreeItem>
                            </TreeView>
                        );
                    })}

                    <CustomFilter features={props.features} handleChange={addFilter} dispatch={props.dispatch} />
                </div>
            </div>
        </div>
    );
};
