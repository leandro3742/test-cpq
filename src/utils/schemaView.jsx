let schema = {
    name: "test",
    views: [
        {
            firstView: {
                items: [
                    {
                        nameComponent: "selector",
                        styles: {},
                        data: {}
                    }
                ]
            }
        }
    ]
}

const addSelector = (form) => {
    schema.views.firstView.items.push(form)
    return schema
}

export const existSelector = (schema) => {
    if (schema.views[0].firstView.items[0].nameComponent === "selector")
        return true
    return false
}
export const trampolineView = {
    selector: addSelector,
    // view: addView
}

import _ from "lodash";

export const createView = (state) => {
    let components = JSON.parse(JSON.stringify(state))
    _.map(components, (value, key) => {
        if (value.control) {
            delete value.control
        }
    })
    return components
}