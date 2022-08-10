import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterBox } from "../component/reactComponents/filterBox";
import { List } from "../component/reactComponents/List";
import { ModalController } from "../component/widgets/modal";
import { Notification } from "../component/widgets/notification";
import { Navigation } from "../component/reactComponents/Navigation";
import Cart from "../component/reactComponents/Cart";
import CompareCopmponent from "../component/reactComponents/compareComponent";
import { fetchInitialState } from "../redux/actions/fetchState";
import { fetchComponents } from "../redux/actions/components";
import { setFeatures } from "../redux/actions/features";

const SeleccionarRueda = (props) => {
  useEffect(() => {
    props.dispatch(setFeatures(["Rueda sola", "Rueda armada", "Base sola"]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row m-0 p-0 d-flex justify-content-center">
      <div className="col-lg-3 col-md-10 col-12 ">
        <FilterBox filters={props.state.filters} features={props.state.features} filtersGroups={props.state.filtersGroup} dispatch={props.dispatch} />
      </div>
      <div className="col-lg-9 col-md-12 col-12 d-flex flex-wrap justify-content-evenly">
        <List hard={props.state.hard} state={props.state} helpState={props.state.help} soft={[props.state.soft.listRuedaArmada, props.state.soft.listRuedaSola]} filtersGroups={props.state.filtersGroup} filters={props.state.filters} dispatch={props.dispatch} />
      </div>
    </div>
  );
};
const dicNav = {
  "Seleccionar Rueda / Base"(state, dispatch) {
    return <SeleccionarRueda state={state} dispatch={dispatch} />;
  },
  "Carrito de compras"(state, dispatch) {
    return <Cart state={state} dispatch={dispatch} />;
  },
  Compare(state, dispatch) {
    return <CompareCopmponent features={state.features} compare={state.compare} dispatch={dispatch} />;
  },
};

const EssenNew = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const [nav, setNav] = useState("Seleccionar Rueda / Base");

  useEffect(() => {
    dispatch(fetchInitialState({ loading: true }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(fetchComponents({ page: state.pages.currentPage, features: state.features, filters: state.filters }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.filters, state.pages.currentPage, state.features]);

  useEffect(() => {
    if (state.modal.active) {
      setOpenModal(true);
      setDataModal(state.modal.data);
    } else {
      setOpenModal(false);
      setDataModal({});
    }
  }, [state.modal]);

  Notification();

  return (
    <>
      <Navigation steps={state.steps} setNav={setNav} />
      {nav && dicNav[nav](state, dispatch)}
      <ModalController modal={state.modal} open={openModal} setOpen={setOpenModal} data={dataModal} dispatch={dispatch} />
    </>
  );
};

export default EssenNew;
