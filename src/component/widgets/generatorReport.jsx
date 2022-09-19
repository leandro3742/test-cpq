import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

import _ from "lodash";
import { setSpinner } from "../../redux/actions/spinner.js";
import { useDispatch } from "react-redux";

const GeneratorReport = (props) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [values, setValues] = React.useState({});
    const [text, setText] = React.useState({});
    const dispatch = useDispatch()

    React.useEffect(() => {
        let aux = {};
        props.steps.forEach((elem) => {
            _.each(elem.data, (val, key) => {
                aux = Object.assign(aux, { [key]: "" });
            });
        });
        setValues(aux);
        setText(aux);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        console.log(props.steps[activeStep].data);
        let aux = {};
        let entra = false;
        for (let i in props.steps[activeStep].data) {
            let step = props.steps[activeStep].data;
            if (step[i].required) {
                if (values[i] === "") {
                    aux[i] = <FormHelperText className="m-0 p-0 text-danger">Este campo es requerido *</FormHelperText>;
                    entra = true;
                } else {
                    aux[i] = "";
                }
                // console.log(values);
            }
        }
        setText(aux);
        if (!entra) {
            console.log(newSkipped);
            if (isStepSkipped(activeStep)) {
                newSkipped = new Set(newSkipped.values());
                newSkipped.delete(activeStep);
            }

            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setSkipped(newSkipped);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const generateCuotation = async () => {
        const toSend = {
            values,
            list:
                props.type === "ruedas"
                    ? props.cart.map((e) => {
                        console.log(e.component.value["Número material"]);
                        return {
                            Descripción: `Ruedas de ${e.component.value["Banda de rodadura/neumático"]} de ø  ${e.component.value["Ø Rueda (mm)"]}, ${e.component.value["Galvanizado Inoxidable Poliamida Pintada"]} con capacidad de ${e.component.value["Capacidad de carga (kg)"]} kg`,
                            Cant: e.cant,
                            Importe: e.component.value["Lista Pùblico U$S"],
                            Mon: "U$S",
                            Código: e.component.value["Número material"],
                            Descuento: e.discount ? e.discount : 0,
                            Total: (e.cant * e.component.value["Lista Pùblico U$S"]).toFixed(2) - 0,
                        };
                    })
                    : props.cart,
        };
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        dispatch(setSpinner(true))
        let data = await fetch(`${import.meta.env.VITE_BACKEND_SERVICE}/api/reports/quotation?type=${props.type}`, {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({ data: toSend }),
            redirect: "follow",
        });
        let blob = await data.blob()
        dispatch(setSpinner(false))
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = "file.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    return (
        <Box>
            <Stepper activeStep={activeStep}>
                {props.steps.map((step, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (step.optional) {
                        labelProps.optional = <Typography variant="caption">Optional</Typography>;
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={step.name} {...stepProps}>
                            <StepLabel {...labelProps}>{step.name}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === props.steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>Review </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Box className="row ds-flex justify-content-center">
                            {_.map(values, (value, key) => {
                                return <TextField className="m-2 col-5" key={key} label={key} readOnly value={value} variant="filled" />;
                            })}
                            <div className="d-flex justify-content-around">
                                <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                                    Back
                                </Button>
                                <img src="https://www.essenltda.uy/clientdata/templates/web/images/custom/logo.png" alt="" />
                                <Button onClick={generateCuotation}>Generar cotización</Button>
                            </div>
                        </Box>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Box className="row ds-flex justify-content-center">
                        {_.map(props.steps[activeStep].data, (field, key) => {
                            if (field.type === "enum") {
                                return (
                                    <Select
                                        key={key}
                                        className={"my-2 " + field.size}
                                        variant="filled"
                                        label={key}
                                        value={values[key] ? values[key] : ""}
                                        onChange={(e) => {
                                            setValues({ ...values, [key]: e.target.value });
                                        }}
                                    >
                                        {_.map(field.arrayValues, (value) => {
                                            return (
                                                <MenuItem key={value} value={value}>
                                                    {value}
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                );
                            } else
                                return (
                                    <div key={key} className="d-flex flex-column justify-content-center align-items-center">
                                        <TextField
                                            className={" " + field.size}
                                            key={key}
                                            required={field.required}
                                            type={field.type}
                                            label={key}
                                            value={values[key] ? values[key] : ""}
                                            onChange={(e) => {
                                                setValues({ ...values, [key]: e.target.value });
                                            }}
                                            variant="filled"
                                        />
                                        <div style={{ height: "20px" }} className={field.size}>
                                            {text[key]}
                                        </div>
                                    </div>
                                );
                        })}
                    </Box>

                    <div className="d-flex justify-content-around align-items-center">
                        <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                            Back
                        </Button>

                        {props.steps[activeStep].optional && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                            </Button>
                        )}
                        <img src="https://www.essenltda.uy/clientdata/templates/web/images/custom/logo.png" alt="" />
                        <Button onClick={handleNext}>{activeStep === props.steps.length - 1 ? "Review" : "Next"}</Button>
                    </div>
                </React.Fragment>
            )}
        </Box>
    );
};

export default GeneratorReport;
