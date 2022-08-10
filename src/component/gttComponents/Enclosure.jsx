import React, { useState, useEffect } from "react";
import { List } from "../reactComponents/List";
import { Detail } from "../reactComponents/Detail";

export const Enclosure = (props) => {
    const [listEnclosure, setListEnclosure] = useState("");

    useEffect(() => {
        if (props.state.hard) {
            if (props.state.soft.listEnclosure.enabled) setListEnclosure({ softName: "listEnclosure", data: props.state.soft.listEnclosure });
        }
    }, [props.state]);
    return (
        <div className="col-12 row">
            <div className="col-6" style={{ height: "80vh", overflowY: "scroll", margin: "auto" }}>
                <List state={props.state.hard} allState={props.state} helpState={props.state.help} soft={[listEnclosure]} dispatch={props.dispatch} />
            </div>
            <div className="col-6">
                <Detail state={props.state} soft={[listEnclosure.softName]} />
            </div>
        </div>
    );
};
