import { all, takeLatest } from "redux-saga/effects";
import { getComponents } from "./api/components";
import { getInitialState } from "./api/getInitialState";
import { getFeatures } from "./api/features";
function* sessionSagas() {
    yield all([takeLatest("FETCH_INITIAL_STATE", getInitialState), takeLatest("FETCH_COMPONENTS", getComponents), takeLatest("FETCH_PAGES", getComponents), takeLatest("FETCH_FEATURES", getFeatures)]);
}
export default function* rootSaga() {
    // con all te permite agregar en el array todos los watchers de todos los actions que tengas
    yield all([sessionSagas()]);
}
