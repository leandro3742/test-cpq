import React from "react";
import { PreviewCard } from "../widgets/previewCard";
import Pagination from "@mui/material/Pagination";
import { setPages } from "../../redux/actions/pages";

export const List = (props) => {
    // const portNumber = 0;
    const changeComponent = (elem) => {
        // props.dispatch(setHard({ stateSoft: props.state.soft, soft: softSelected.key, stateHelp: props.state.help, component: elem.value, portNumber: portNumber }));
        // props.dispatch(setHelp({ component: elem.value, soft: softSelected.key, portNumber: portNumber }));
        // props.dispatch(setSoft({ component: elem.value, soft: softSelected.key, portNumber: portNumber }));
    };

    const changePage = (event, value) => {
        props.dispatch(setPages({ currentPage: value }));
    };

    return (
        <div className="row col-12">
            {props.state.components.map((elem, it) => {
                /* previewProperties={["Capacidad de carga (kg)", "Disponible", "Lista Pùblico U$S"]} */
                elem.previewProperties = ["Núcleo", "Capacidad de carga (kg)", "Lista Pùblico U$S"];
                return (
                    <div key={elem["_id"]} type="button" onClick={() => changeComponent(elem)} className="col-lg-5 col-md-6 col-12 m-0 my-lg-3 my-3">
                        <PreviewCard state={props.state} key={elem["_id"]} previewProperties={elem.previewProperties} data={elem} dispatch={props.dispatch} />
                    </div>
                );
            })}
            <div className="col-12 d-flex justify-content-center">
                <Pagination page={props.state.pages.currentPage} onChange={changePage} count={props.state.pages.totalPages} />
            </div>
        </div>
    );
};
