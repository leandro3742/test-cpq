import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { Navigation } from "../component/reactComponents/Navigation";
import Puertas from "../component/essenPuertasComponents/Puertas";
import { statePuertas } from "../mock/EssenInitialState/puertas/puertas";
import { filters } from "../mock/EssenInitialState/puertas/filters";
import CotizacionPuertas from "../component/essenPuertasComponents/CotizacionPuertas";
import { ModalController } from "../component/widgets/modal";

const dicNav = {
    "Generar puerta"(props) {
        return <Puertas state={props.state.values} hard={props.hard} setHard={props.setHard} filtersData={props.filtersData} setFiltersData={props.setFiltersData} />;
    },
    Accesorios(props) {
        return <Puertas state={props.state.values} hard={props.hard} setHard={props.setHard} filtersData={props.filtersData} setFiltersData={props.setFiltersData} />;
    },
    Cotizacion(props) {
        return <CotizacionPuertas cart={props.cart} setCart={props.setCart} addTocart={props.addTocart} hard={props.hard} filtersData={props.filtersData} dispatch={props.dispatch} />;
    },
};
const EssenPuertas = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const [dataModal, setDataModal] = useState({});

    const [nav, setNav] = useState();
    const [hard, setHard] = useState({});
    const [filtersData, setFiltersData] = useState(filters);
    const [cart, setCart] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let aux = {};
        _.each(filters, (elem, key) => {
            aux = Object.assign(aux, { [key]: "" });
        });
        setHard(aux);
    }, []);

    useEffect(() => {
        if (state.modal.active) {
            setOpenModal(true);
            setDataModal([]);
        } else {
            setOpenModal(false);
            setDataModal({});
        }
    }, [state.modal]);

    const addTocart = () => {
        setIndex(index + 1);
        let aux = {};
        _.each(filters, (elem, key) => {
            aux = Object.assign(aux, { [key]: "" });
        });
        setHard(aux);
        setNav("Generar puerta");
    };

    useEffect(() => {
        let aux = cart;
        aux[index] = hard;
        setCart(aux);
    }, [cart, hard, index]);

    return (
        <div className="row d-flex justify-content-center">
            <Navigation steps={["Generar puerta", "Accesorios", "Cotizacion"]} setNav={setNav} />
            {nav && dicNav[nav]({ cart: cart, setCart: setCart, state: statePuertas[nav], hard: hard, setHard: setHard, filtersData: filtersData, setFiltersData: setFiltersData, dispatch: dispatch, addTocart: addTocart })}
            <ModalController isDoor={true} modal={state.modal} open={openModal} setOpen={setOpenModal} data={dataModal} dispatch={dispatch} cart={cart} />
        </div>
    );
};

export default EssenPuertas;
