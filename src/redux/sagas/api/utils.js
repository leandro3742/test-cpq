export async function fetchApi(header, url) {
    try {
        const response = await fetch(url, header);
        return response.json()
    } catch (err) {
        console.log(err);
    }
}

export const buildHeader = (page, features, filters) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
        data: {
            limit: 10,
            page: page,
            client: "essen",
            features: features,
            filters: filters,
        },
    });
    let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };
    return requestOptions;
};

export const buildHeaderProperties = (obj) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
        data: {
            client: "essen",
            feature: obj.feature,
            property: obj.property,
        },
    });
    let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };
    return requestOptions;
};

export const buildHeaderPdf = () => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/pdf");
    myHeaders.append("Accept-Ranges", "bytes");
    // myHeaders.append("Access-Control", "");
    // Allow-Origin
    // let raw = JSON.stringify({
    //     data: {
    //         client: "essen",
    //         feature: obj.feature,
    //         property: obj.property,
    //     },
    // });
    let requestOptions = {
        method: "GET",
    };
    return requestOptions;
};
