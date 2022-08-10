import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import _ from "lodash";
import { setComponent, setComponentDetail, setConfiguration } from "../../redux/actions/gtt";
import { useDispatch } from "react-redux";

const PreviewCard = (props) => {
    const showProperties = (valor) => {
        return _.map(valor, (value, key) => {
            if (typeof value === "string")
                return (
                    <h6 key={key}>
                        {key}: {value}
                    </h6>
                );
            if (typeof value === "object" && !Array.isArray(value)) return showProperties(value);
            else return;
        });
    };
    const handleDispatch = () => {
        props.dispatch(setComponentDetail(props.data));
        props.dispatch(setConfiguration({ nameComponent: props.nameComponent, data: props.data, step: props.step }));
        props.dispatch(setComponent({ nameReactComponent: "previewCard", component: props.data, ports: [] }));
    };
    return (
        <Card ariant="outlined" className={"border border-2 col-3"}>
            <h4 className="text-center">Title</h4>
            <div className="">
                <img style={{ maxHeight: "200px", border: "1px solid grey" }} src="https://images-ext-1.discordapp.net/external/q3UrHVCHUUNdPKnuM0ZnYe0w7FORpbxiB61gkjVqmzE/https/pbs.twimg.com/media/EVPMuLFU0AA1_kx.jpg?width=348&height=483" alt="" />
            </div>

            <div className="text-center">{showProperties(props.data)}</div>

            <div className="">
                <Button className="m-2" variant="contained" onClick={() => handleDispatch()}>
                    Add
                </Button>
            </div>
        </Card>
    );
};

export default PreviewCard;
