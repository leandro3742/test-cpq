import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";
import CancelIcon from "@mui/icons-material/Cancel";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";

import _ from "lodash";
import { removeCompare } from "../../redux/actions/compare";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  // [`&.${tableCellClasses.head}`]: {
  //     backgroundColor: theme.palette.common.black,
  //     color: theme.palette.common.white,
  // },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    margin: 10,
    padding: 10,
  },
}));

const StyledTableCellMobile = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 10,
    margin: 5,
    padding: 1,
    textAlign: "center",
    lineHeight: "1.2em",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 10,
    margin: 5,
    padding: 1,
    textAlign: "center",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CompareCopmponent(props) {
  const [components, setComponents] = useState([]);
  const [firstIndexCompare, setFirstIndexCompare] = useState(0);
  const [secondIndexCompare, setSecondIndexCompare] = useState(1);

  const [esqueleto, setEsqueleto] = useState([]);

  const removeComponent = (comp) => {
    props.dispatch(removeCompare(comp["_id"]));
  };

  useEffect(() => {
    let aux = [];
    props.compare.forEach((elem) => {
      _.map(elem.value, (property, key) => {
        if (aux.indexOf(key) === -1) {
          aux.push(key);
        }
      });
    });
    setEsqueleto(aux);
    setComponents(props.compare);
  }, [props.compare]);

  const backCompare = () => {
    firstIndexCompare === 0 ? setFirstIndexCompare(components.length - 1) : setFirstIndexCompare(firstIndexCompare - 1);
    secondIndexCompare === 0 ? setSecondIndexCompare(components.length - 1) : setSecondIndexCompare(secondIndexCompare - 1);
  };

  const nextCompare = () => {
    firstIndexCompare === components.length - 1 ? setFirstIndexCompare(0) : setFirstIndexCompare(firstIndexCompare + 1);
    secondIndexCompare === components.length - 1 ? setSecondIndexCompare(0) : setSecondIndexCompare(secondIndexCompare + 1);
  };
  return (
    <div className="d-flex justify-content-center">
      {window.screen.width > 426 && (
        <TableContainer component={Paper} className="w-75">
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell />
                {_.map(components, (comp, key) => {
                  return (
                    <StyledTableCell key={comp.value.name} className="row">
                      <div className="col-12 d-flex justify-content-end">
                        <CancelIcon onClick={() => removeComponent(comp)} style={{ cursor: "pointer", color: "red" }} />
                      </div>
                      <div className="col-12 d-flex justify-content-center">
                        <img style={{ height: "50px" }} src={`${import.meta.env.VITE_BACKEND_SERVICE}/api/reports/image?id=${comp.value["Número material"]}`} alt={comp.value["Número material"]} />
                      </div>
                      <div className="col-12 text-center">
                        <span>{comp.value.name}</span>
                      </div>
                    </StyledTableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {_.map(esqueleto, (name) => {
                return (
                  <StyledTableRow key={name}>
                    <StyledTableCell component="th" scope="row">
                      {name}
                    </StyledTableCell>
                    {_.map(components, (comp) => {
                      if (comp.value[name])
                        return (
                          <StyledTableCell key={comp.value.name} component="th" scope="row" className="text-center">
                            {comp.value[name]}
                          </StyledTableCell>
                        );
                      return (
                        <StyledTableCell key={comp.value.name} className="text-center">
                          <CloseIcon style={{ color: "red" }} />
                        </StyledTableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {window.screen.width < 426 && components.length > 0 && (
        <Box component={Paper} className="w-100">
          <Table aria-label="customized table" className="w-100 p-0 m-0">
            <TableHead>
              <TableRow>
                <StyledTableCellMobile key={components[firstIndexCompare].value.name}>
                  <div className="d-flex justify-content-end">
                    <CancelIcon onClick={() => removeComponent(components[firstIndexCompare])} style={{ cursor: "pointer", color: "red", fontSize: "18px" }} />
                  </div>
                  <div>
                    <img style={{ height: "50px" }} src={`${import.meta.env.VITE_BACKEND_SERVICE}/api/reports/image?id=${components[firstIndexCompare].value["Número material"]}`} alt={components[firstIndexCompare].value["Número material"]} />
                  </div>
                  <div className="d-flex justify-content-center">
                    <b>
                      <span style={{ fontSize: "10px" }}>{components[firstIndexCompare].value.name}</span>
                    </b>
                  </div>
                </StyledTableCellMobile>
                <StyledTableCellMobile />
                <StyledTableCellMobile key={components[secondIndexCompare].value.name}>
                  <div className="d-flex justify-content-end">
                    <CancelIcon onClick={() => removeComponent(components[secondIndexCompare])} style={{ cursor: "pointer", color: "red", fontSize: "18px" }} />
                  </div>
                  <div>
                    <img style={{ height: "50px" }} src={`${import.meta.env.VITE_BACKEND_SERVICE}/api/reports/image?id=${components[secondIndexCompare].value["Número material"]}.jpg`} alt={components[secondIndexCompare].value["Número material"]} />
                  </div>
                  <div className="d-flex justify-content-center">
                    <b>
                      <span style={{ fontSize: "10px" }}>{components[secondIndexCompare].value.name}</span>
                    </b>
                  </div>
                </StyledTableCellMobile>
              </TableRow>
            </TableHead>
            <TableBody>
              {_.map(esqueleto, (name) => {
                return (
                  <StyledTableRow key={name}>
                    <StyledTableCellMobile component="th" scope="row">
                      {components[firstIndexCompare].value[name] ? <span>{components[firstIndexCompare].value[name]}</span> : <CloseIcon style={{ color: "red", fontSize: 10 }} />}
                    </StyledTableCellMobile>
                    <StyledTableCellMobile component="th" scope="row">
                      <b>{name}</b>
                    </StyledTableCellMobile>
                    <StyledTableCellMobile component="th" scope="row">
                      {components[secondIndexCompare].value[name] ? <span>{components[secondIndexCompare].value[name]}</span> : <CloseIcon style={{ color: "red", fontSize: 10 }} />}
                    </StyledTableCellMobile>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
          <div className="d-flex justify-content-around">
            <ArrowBackIosNewIcon color={"info"} style={{ cursor: "pointer" }} onClick={backCompare} />
            <ArrowForwardIosIcon color={"info"} style={{ cursor: "pointer" }} onClick={nextCompare} />
          </div>
        </Box>
      )}
    </div>
  );
}
