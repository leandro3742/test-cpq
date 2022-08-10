import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export const SelectMultiWidget = (props) => {
    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={props.itemName}
                    onChange={props.handleChange}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => {
                        let aux = [];
                        for (let i in selected) {
                            if (!aux.includes(selected[i])) aux.push(selected[i]);
                        }
                        return aux.join(", ");
                    }}
                    MenuProps={MenuProps}
                    name={props.name}
                >
                    {props.items.map((item) => (
                        <MenuItem key={item} value={item}>
                            <Checkbox checked={props.itemName.indexOf(item) > -1} />
                            <ListItemText primary={item} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};
