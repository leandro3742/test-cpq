import React from "react";
import { PortSelector } from "./PortSelector";
// Material-ui
import Box from "@mui/material/Box";
export const ListwithPorts = (props) => {
    return (
        <Box className="rounded pt-2 pb-3 px-5 shadow">
            {props.soft.map((elem, iterator) => (
                <div key={iterator}>{typeof elem === "object" && elem.data.enabled && <PortSelector allState={props.allState} dispatch={props.dispatch} hard={props.state} soft={elem.data} helpState={props.helpState} softName={props.soft[iterator].softName} />}</div>
            ))}
        </Box>
    );
};
