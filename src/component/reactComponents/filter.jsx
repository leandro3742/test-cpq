import React from "react";
import Checkbox from "@mui/material/Checkbox";
export const Filter = (props) => {
    return (
        <div>
            <Checkbox name={props.name} checked={props.isChecked} onClick={props.handleChange} />
            {props.name}
        </div>
    );
};
