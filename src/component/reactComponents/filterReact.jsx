import { Card } from "@mui/material";
import _ from "lodash";
import React from "react";

const filterReact = ({ data }) => {
    return (
        <>
            {_.map(data, (value, key) => {
                return <Card variant="outlined">{key + ": " + value}</Card>;
            })}
        </>
    );
};

export default filterReact;
