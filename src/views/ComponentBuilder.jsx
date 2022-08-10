import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { Button } from "@material-ui/core";
import { Refresh } from "@material-ui/icons";
import {
    UIStoreProvider, UIMetaProvider, UIRootRenderer,
    isInvalid, createOrderedMap, createStore,
    storeUpdater
} from '@ui-schema/ui-schema'
import { Step, Stepper, widgets } from '@ui-schema/ds-material'
import { RichText, RichTextInline } from "@ui-schema/material-richtext";
import { browserT } from "../t";
import { featureSchema } from '../features/newSchema';
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

// Utils
import { convertAjvToUiSchema, createSchema } from '../utils';
import List from '../component/list';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { createComponent } from '../redux/actions/CRUDComponents';
import { values } from 'draft-js/lib/DefaultDraftBlockRenderMap';

const customWidgets = { ...widgets };
customWidgets.custom = {
    ...widgets.custom,
    RichText: RichText,
    RichTextInline: RichTextInline,
    Stepper: Stepper,
    Step: Step,
};

const ComponentBuilder = (props) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    const [idFeature, setIdFeature] = useState("")
    const [showValidity, setShowValidity] = useState(false);
    const [store, setStore] = useState(() => createStore(createOrderedMap()));
    const [schema, setSchema] = useState(() => createOrderedMap(featureSchema()));

    /* useEffect(() => {
        let url = "http://localhost:3000/create/component/";
        let id = window.location.href.split(url)[1];
        setIdFeature(id)
        let feature = JSON.parse(JSON.stringify(state.features["listFeatures"][id]))
        let schema = convertAjvToUiSchema(feature, false, [], [])
        setSchema(() => createOrderedMap(schema.schema))
    }, []); */

    const onChange = useCallback((storeKeys, scopes, action) => {
        setStore(storeUpdater(storeKeys, scopes, action))
    }, [setStore])

    useEffect(() => {
    }, [store])
    return <React.Fragment>
        <UIStoreProvider
            store={store}
            onChange={onChange}
            showValidity={showValidity}
        >
            <UIRootRenderer schema={schema} />

        </UIStoreProvider>

        <div className='d-flex justify-content-around'>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <Button
                    style={{ marginTop: 24 }}
                    variant={'contained'}
                >Back home</Button>
            </Link>

            <Button
                style={{ marginTop: 24 }}
                onClick={() => {
                    // let schemaUi = createSchema(store.getValues().toJS());
                    let schema = store.getValues().toJS()
                    const createComponentIndex = (schema, idFeature) => {
                        let arrValue = {};
                        for (let i in schema) {
                            if (i != "fields") {
                                Object.assign(arrValue, { [i]: schema[i] })
                            }
                        }
                        return { value: arrValue, schema: idFeature }
                    }
                    let component = createComponentIndex(schema, idFeature)
                    console.log(component)
                    dispatch(createComponent(component))
                    // setSchema(createOrderedMap(schemaUi))
                }}
                variant={'contained'}
            >Save!</Button>
        </div>
    </React.Fragment>;
};

const AppConstructor = () => {
    return <UIMetaProvider widgets={customWidgets} t={browserT}>
        <ComponentBuilder />
    </UIMetaProvider>
}

export default AppConstructor
