import React, { useState, useEffect } from "react";
import { List } from "../reactComponents/List";
import { Detail } from "../reactComponents/Detail";
import { ListwithPorts } from "../reactComponents/ListWithPorts";

export const Antenna = (props) => {
    const [listAntenna, setListAntenna] = useState("");
    const [listPcbConnector, setListPcbConnector] = useState("");

    useEffect(() => {
        if (props.state.hard) {
            if (props.state.soft.listAntenna.enabled) setListAntenna({ softName: "listAntenna", data: props.state.soft.listAntenna });
            if (props.state.soft.listAntenna.enabled) setListPcbConnector({ softName: "listPcbConnector", data: props.state.soft.listPcbConnector });
        }
    }, [props.state]);
    return (
        <div className="col-12 row">
            <div className="col-3" style={{ height: "80vh", overflowY: "scroll", margin: "auto" }}>
                <List state={props.state.hard} allState={props.state} helpState={props.state.help} soft={[listAntenna]} dispatch={props.dispatch} />
            </div>
            <div className="col-5">
                <ListwithPorts state={props.state.hard} allState={props.state} helpState={props.state.help} soft={[listAntenna, listPcbConnector]} dispatch={props.dispatch} />
            </div>
            <div className="col-4">
                <Detail state={props.state} soft={[listAntenna.softName, listPcbConnector.softName]} />
            </div>
        </div>
    );
};
