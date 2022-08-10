import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export const ControllerSelected = (props) => {
    const [inputValue, setInputValue] = useState("");
    return (
        <div>
            <Autocomplete
                value={props.value}
                onChange={(event, newValue) => {
                    props.handleChange(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                options={props.array}
                renderInput={(params) => <TextField {...params} label={props.name} />}
            />
        </div>
    );
};
