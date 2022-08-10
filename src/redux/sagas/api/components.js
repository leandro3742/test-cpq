import { put, call } from "redux-saga/effects";
import { setComponents } from "../../actions/components";
import { setPages } from "../../actions/pages";
import { fetchApi, buildHeader } from "./utils";

export function* getComponents(action) {
    try {
        let header = buildHeader(action.payload.page, action.payload.features, action.payload.filters);
        const data = yield call(fetchApi, header, `${import.meta.env.VITE_BACKEND_SERVICE}/api/component/allByClient`);
        yield put(setComponents(data.data));
        if (data.totalPages <= 1) yield put(setPages({ totalPages: 1, currentPage: 1 }));
        else yield put(setPages({ totalPages: data.totalPages }));
    } catch (error) {
        return console.log(error);
    }
}
