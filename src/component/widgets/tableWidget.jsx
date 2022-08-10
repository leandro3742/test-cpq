import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { SelectWidget } from "./selectWidget";
import { componentController } from "../../features/componentController";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
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

const arrayExpressions = {
    string: ["equals", "different", "includes"],
    number: ["equals", "more than", "less than"],
};

export const TableWidget = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {props.arrayNames.map((value) => {
                            return (
                                <StyledTableCell align="center" key={value}>
                                    {value}
                                </StyledTableCell>
                            );
                        })}
                        <StyledTableCell align="center">Add</StyledTableCell>
                        <StyledTableCell align="center">Delete</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map((row, iterator) => {
                        const propertyValue = componentController.getPropertyComponent(props.feature.id, row.name);
                        return (
                            <StyledTableRow key={iterator}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <SelectWidget
                                        name="exp"
                                        value={row.expression}
                                        array={arrayExpressions[row.type]}
                                        handleChange={(e) => {
                                            props.handleChange(e, iterator);
                                        }}
                                    />
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.type === "number" ? (
                                        <input type={row.type} />
                                    ) : (
                                        <SelectWidget
                                            array={propertyValue}
                                            value={row.value}
                                            name="value"
                                            handleChange={(e) => {
                                                props.handleChange(e, iterator);
                                            }}
                                        />
                                    )}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <AddCircleIcon
                                        onClick={() => {
                                            props.handleAdd(row);
                                        }}
                                    />
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <DeleteIcon
                                        onClick={() => {
                                            props.handleDelete(iterator);
                                        }}
                                    />
                                </StyledTableCell>
                            </StyledTableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
