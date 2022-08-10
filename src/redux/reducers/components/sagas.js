import { put, all, takeLatest, select, call } from "redux-saga/effects";
import { setComponents } from "../../actions/components";
import { setPages } from "../../actions/pages";

async function fetchApi(method, url) {
    const response = await fetch(url, method);
    return await response.json();
}

export function* getComponents(action) {
    try {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        console.log(action.payload.features);
        let raw = JSON.stringify({
            data: {
                limit: 10,
                page: action.payload.page,
                client: "essen",
                features: action.payload.features,
                filters: action.payload.filters,
            },
        });
        let requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };
        const data = yield call(fetchApi, requestOptions, `${import.meta.env.VITE_BACKEND_SERVICE}/api/component/allByClient`);
        console.log(data);
        yield put(setComponents(data.data));
        if (data.totalPages <= 1) yield put(setPages({ totalPages: 1, currentPage: 1 }));
        else yield put(setPages({ totalPages: data.totalPages }));
    } catch (error) {
        return console.log(error);
    }
}
