import { put, call } from "redux-saga/effects";
import { initialStateEssen } from "../../../mock/EssenInitialState/index";
import { setInitialStateCart } from "../../actions/cart";
import { setInitialStateSteps } from "../../actions/steps";
import { fetchSuccess } from "../../actions/fetchState";
import { setInitialSoft } from "../../actions/soft";
import { setInitialStateFiltersGroups } from "../../actions/filtersGropup";
import { setInitialStateHard } from "../../actions/hard";
// import { fetchApi } from "./utils";

const a = (b) => {
    return b;
};

export function* getInitialState(action) {
    try {
        const data = yield call(a, initialStateEssen);
        yield put(setInitialStateSteps(data.steps));
        yield put(setInitialStateCart(data.cart));
        yield put(setInitialSoft(data.soft));
        yield put(setInitialStateHard(data.hard));
        yield put(setInitialStateFiltersGroups(data.filtersGroup));
        yield put(fetchSuccess({ loading: false }));
    } catch (error) {
        return yield put(console.log(error));
    }
}
