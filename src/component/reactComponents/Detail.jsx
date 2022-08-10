import React, { useState, useEffect } from "react";
import { CardDetail } from "./cardDetail";

export const Detail = (props) => {
    const [component, setComponent] = useState("");

    useEffect(() => {
        if (props.state) {
            let comp;
            for (let i in props.soft) {
                if (props.soft[i] === props.state.help.selected) comp = i;
            }

            if (props.state.help[props.soft[comp]]) {
                if (props.state.help[props.soft[comp]].component) setComponent(props.state.help[props.soft[comp]].component);
            }
        }
    }, [props.soft, props.state]);

    return (
        <div>
            <CardDetail data={component} />
        </div>
    );
};
