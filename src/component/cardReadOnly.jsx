import React from 'react';
import { Refresh } from "@material-ui/icons";
import {
    UIStoreProvider, UIMetaProvider, UIRootRenderer, createOrderedMap, createStore, storeUpdater } from '@ui-schema/ui-schema'
import { Step, Stepper, widgets } from '@ui-schema/ds-material'
import { RichText, RichTextInline } from "@ui-schema/material-richtext";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { convertAjvToUiSchema } from '../utils';
import { browserT } from "../t";

const customWidgets = {...widgets};
customWidgets.custom = {
    ...widgets.custom,
    RichText: RichText,
    RichTextInline: RichTextInline,
    Stepper: Stepper,
    Step: Step,
};

const CardReadOnly = (props) => {
    const [showValidity, setShowValidity] = React.useState(false);
    const [store, setStore] = React.useState(() => createStore(createOrderedMap()));
    const [schema, setSchema] = React.useState(() => createOrderedMap());
    // const [schemaUi, setSchemaUi] = React.useState({properties: {}});

    React.useEffect(() => {
    }, [setStore, setSchema]);

    React.useEffect(() => {
            const schemas = JSON.parse(JSON.stringify(props.schema))
            let func = convertAjvToUiSchema(schemas, true, [], [])
            setSchema(createOrderedMap(func.schema))     
            // setSchemaUi(convertAjvToUiSchema(func.schema, true, []))   
    }, []);

    const onChange = React.useCallback((storeKeys, scopes, action) => {
        setStore(storeUpdater(storeKeys, scopes, action))
    }, [setStore])

    return(
        <UIMetaProvider widgets={customWidgets} t={browserT}>
            <React.Fragment>
                <UIStoreProvider store={store} onChange={onChange} showValidity={showValidity}>
                    <UIRootRenderer schema={schema}/>
                </UIStoreProvider>    
            </React.Fragment>
        </UIMetaProvider>
    ) 
}

export default CardReadOnly
