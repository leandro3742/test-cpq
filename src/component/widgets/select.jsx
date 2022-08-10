import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import _ from "lodash";

const SelectWidget = (props) => {
    return (
        <FormControl fullWidth>
            <InputLabel id={props.name}>{props.name}</InputLabel>
            <Select
                labelId={props.name}
                id={props.name}
                value={props.value.name}
                label={props.name}
                name={props.father + "," + props.name}
                onChange={props.handleChange}
                style={{ height: "50px" }}
            >
                {_.map(props.array, (value) => {
                    return (
                        <MenuItem key={value} value={value}>{value}</MenuItem>
                    )

                })}
            </Select>
        </FormControl>
    );
}
export default SelectWidget;
