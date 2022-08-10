import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import Typography from "@mui/material/Typography";
import Label from "@mui/icons-material/Label";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SelectWidget } from "../widgets/selectWidget";

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
    color: theme.palette.text.secondary,
    [`& .${treeItemClasses.content}`]: {
        color: theme.palette.text.secondary,
        borderTopRightRadius: theme.spacing(2),
        borderBottomRightRadius: theme.spacing(2),
        paddingRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        "&.Mui-expanded": {
            fontWeight: theme.typography.fontWeightRegular,
        },
        "&:hover": {
            backgroundColor: theme.palette.action.hover,
        },
        "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
            backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
            color: "var(--tree-view-color)",
        },
        [`& .${treeItemClasses.label}`]: {
            fontWeight: "inherit",
            color: "inherit",
        },
    },
    [`& .${treeItemClasses.group}`]: {
        marginLeft: 0,
        [`& .${treeItemClasses.content}`]: {
            paddingLeft: theme.spacing(2),
        },
    },
}));

export function StyledTreeItem(props) {
    const { bgColor, color, labelIcon: LabelIcon, labelInfo, labelText, ...other } = props;

    return (
        <StyledTreeItemRoot
            label={
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 0.5,
                        pr: 0,
                    }}
                >
                    <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
                    <Typography variant="body2" sx={{ fontWeight: "inherit", flexGrow: 1 }}>
                        {labelText}
                    </Typography>
                    <Typography variant="caption" color="inherit">
                        {labelInfo}
                    </Typography>
                </Box>
            }
            style={{
                "--tree-view-color": color,
                "--tree-view-bg-color": bgColor,
            }}
            {...other}
        />
    );
}

StyledTreeItem.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    labelIcon: PropTypes.elementType.isRequired,
    labelInfo: PropTypes.string,
    labelText: PropTypes.string.isRequired,
};

import _ from "lodash";

export default function ToolBox(props) {
    const [component, setComponent] = useState("");
    const [fields, setFields] = useState([]);
    const [form, setForm] = useState({ name: "", fields: {} });

    const selectedComponent = (selected) => {
        let aux = [];
        for (let i in selected.fields) {
            if (!selected.fields[i].value) selected.fields[i].value = "";
            aux.push(selected.fields[i]);
        }
        setFields(aux);
        setComponent(selected.name);
    };

    const handleChange = (e) => {
        let aux = fields;
        for (let i in aux) {
            if (aux[i].name === e.target.name) aux[i].value = e.target.value;
        }
        selectedComponent({ name: component, fields: aux });
    };

    useEffect(() => {
        let auxFields = JSON.parse(JSON.stringify(fields));
        for (let i in auxFields) {
            auxFields[i] = { name: auxFields[i].name, value: auxFields[i].value };
        }
        props.handleChange({ name: component, fields: auxFields });
        setForm({ name: component, fields: auxFields });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [component, fields]);

    return (
        <TreeView aria-label="gmail" defaultExpanded={["3"]} defaultCollapseIcon={<ArrowDropDownIcon />} defaultExpandIcon={<ArrowRightIcon />} defaultEndIcon={<div style={{ width: 24 }} />} sx={{ maxHeight: "80vh", flexGrow: 1, maxWidth: 400, overflowY: "auto" }} className="m-3">
            <StyledTreeItem nodeId="1" labelText="Created components" labelIcon={Label}>
                {props.state.components.map((component, iterator) => {
                    return (
                        <div key={iterator}>
                            <StyledTreeItem onClick={() => props.showComponent(iterator)} labelText={component.name} nodeId={component.name + iterator} labelIcon={SupervisorAccountIcon} color="#1a73e8" bgColor="#e8f0fe" />
                        </div>
                    );
                })}
            </StyledTreeItem>

            <StyledTreeItem nodeId="3" labelText="Categories" labelIcon={Label}>
                {props.state.reactComponents.map((component) => {
                    return <StyledTreeItem onClick={() => selectedComponent(component)} key={component.name} nodeId={component.name} labelText={component.name} labelIcon={SupervisorAccountIcon} color="#1a73e8" bgColor="#e8f0fe" />;
                })}
            </StyledTreeItem>
            {component !== "" && (
                <div>
                    {_.map(fields, (field, i) => {
                        console.log(field);
                        return (
                            <div key={i} className="my-3">
                                <SelectWidget value={field.value} handleChange={handleChange} name={field.name} array={field.enum} />
                                {/* <SelectMultiWidget value={[field.value]} handleChange={handleChange} itemName={[field.name]} items={field.enum} /> */}
                            </div>
                        );
                    })}

                    <div className="d-flex justify-content-evenly">
                        <button onClick={() => setComponent("")} className="btn btn-outline-danger">
                            Cancel
                        </button>
                        <button onClick={() => props.saveChanges(form)} className="btn btn-outline-primary">
                            Apply
                        </button>
                    </div>
                </div>
            )}
        </TreeView>
    );
}
