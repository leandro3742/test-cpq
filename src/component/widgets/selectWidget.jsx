import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import _ from "lodash";

export const SelectWidget = (props) => {
    return (
        <FormControl fullWidth style={{ minWidth: "100px", maxWidth: "500px" }}>
            <InputLabel id={props.name}>{props.name}</InputLabel>
            <Select labelId={props.name} name={props.name} id={props.name} value={props.value} label={props.name} onChange={props.handleChange} style={{ height: "50px" }}>
                {_.map(props.array, (value) => {
                    if (typeof value === "object")
                        return (
                            <MenuItem key={value.value.name} value={value.value.name}>
                                {value.value.name}
                            </MenuItem>
                        );
                    else
                        return (
                            <MenuItem key={value} value={value}>
                                {value}
                            </MenuItem>
                        );
                })}
            </Select>
        </FormControl>
    );
};
