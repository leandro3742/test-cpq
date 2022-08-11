import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import _ from "lodash";
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const Navigation = (props) => {
    const [value, setValue] = useState(props.active ? props.active : 0);
    useEffect(() => {
        setValue(props.active);
    }, [props.active]);

    useEffect(() => {
      if (props.steps[value]){
        if(typeof props.steps[value] === 'object')
          props.setNav(props.steps[value].key);
        else
          props.setNav(props.steps[value]);
        }
    }, [props, value]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box className="col-lg-12 col-12 m-auto navButton mb-3">
            <AppBar position="static" color="default">
                <Tabs
                    value={value ? value : 0}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    {_.map(props.steps, (elem, key) => {
                        if (typeof elem === "object") {
                            if (elem.enabled) {
                                return (
                                    <Tab
                                        style={{ fontSize: window.screen.width < 500 ? "10px" : "14px" }}
                                        key={key}
                                        disabled={!elem.enabled}
                                        onClick={() => {
                                            props.setNav(elem.key);
                                        }}
                                        label={elem.key}
                                    />
                                );
                            } else if (props.showDisabled !== false)
                                return (
                                    <Tab
                                        style={{ fontSize: window.screen.width < 500 ? "10px" : "14px" }}
                                        key={key}
                                        disabled={!elem.enabled}
                                        onClick={() => {
                                            props.setNav(elem.key);
                                        }}
                                        label={elem.key}
                                    />
                                );
                        }
                        else return <Tab style={{ fontSize: window.screen.width < 500 ? "10px" : "14px" }} key={key} onClick={() => props.setNav(elem)} label={elem} />
                    }
                    )}
                </Tabs>
            </AppBar>
            {/* <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                className="d-flex justify-content-evenly"
            >
                {_.map(props.steps, (elem, key) => {
                    if (typeof elem === "object") {
                        if (elem.enabled) {
                            return (
                                <BottomNavigationAction
                                    style={{ color: "white", backgroundColor: props.nav === elem.key ? "#797A74" : "#DD161B" }}
                                    className="rounded my-1"
                                    key={key}
                                    disabled={!elem.enabled}
                                    onClick={() => {
                                        props.setNav(elem.key);
                                    }}
                                    label={elem.question}
                                />
                            );
                        } else if (props.showDisabled !== false)
                            return (
                                <BottomNavigationAction
                                    style={{ backgroundColor: props.nav === elem.key ? "rgba(121, 122, 116, .5)" : "rgba(221, 22, 27, .5)", color: "white" }}
                                    className="rounded my-1"
                                    key={key}
                                    disabled={!elem.enabled}
                                    onClick={() => {
                                        props.setNav(elem.key);
                                    }}
                                    label={elem.question}
                                />
                            );
                    } else return <BottomNavigationAction style={{ backgroundColor: props.nav === elem.key ? "#797A74" : "#DD161B", color: "white" }} className="rounded my-1" key={key} onClick={() => props.setNav(elem)} label={elem} />;
                })}
            </BottomNavigation> */}
        </Box>
    );
};
