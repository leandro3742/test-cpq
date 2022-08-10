import React, { useState, useEffect } from "react";
import { CardDetail } from "../reactComponents/cardDetail";

export const PreviewDetail = (props) => {
    console.log(props.component);
    return (
        <div>
            <CardDetail data={props.component} />
        </div>
    );
};
