import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSoft } from "../utils/gtt";
import { Navigation } from "../component/reactComponents/Navigation";
import { Enclosure } from "../component/gttComponents/Enclosure";
import { Antenna } from "../component/gttComponents/Antenna";
import { DataPower } from "../component/gttComponents/DataPower";
import { Review } from "../component/gttComponents/Review";

const dicNav = {
    enclosure(state, dispatch) {
        return <Enclosure state={state} dispatch={dispatch} />;
    },
    antenna(state, dispatch) {
        return <Antenna state={state} dispatch={dispatch} />;
    },
    dataPower(state, dispatch) {
        return <DataPower state={state} dispatch={dispatch} />;
    },
    review(state, dispatch) {
        return <Review state={state} dispatch={dispatch} />;
    },
};
const Gtt = () => {
    const state = useSelector((state) => state.gtt);
    const dispatch = useDispatch();
    const [nav, setNav] = useState("");

    useEffect(() => {
        if (nav) dicNav[nav]({ state: state });
    }, [nav, state]);

    useEffect(() => {
        createSoft();
        // dispatch(initialState(initialStateGtt));
    }, []);

    return (
        <div className="row ">
            <Navigation setNav={setNav} />
            {nav && dicNav[nav](state, dispatch)}
        </div>
    );
};

export default Gtt;
