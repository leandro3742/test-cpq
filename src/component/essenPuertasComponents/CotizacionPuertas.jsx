import React, { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";

import _ from "lodash";
import { tablePuertas } from "../../mock/EssenInitialState/puertas/tables";
import { Paper } from "@mui/material";
import { showModal } from "../../redux/actions/modal";
import "../../styles/QuotationDoors.css";
const CotizacionPuertas = (props) => {
  const [price, setPrice] = useState(1);
  const [cant, setCant] = useState(1);
  const [ref, setRef] = useState(1);
  const getValues = (key, elem) => {
    for (let i in tablePuertas) {
      if (tablePuertas[i][key]) {
        let data = [];
        for (let j in elem) {
          if (elem[j] !== "") data.push(elem[j]);
        }
        data = data.join(", ");
        return (
          <td className="py-1 px-2" key={key}>
            {data !== "" ? data : <CloseIcon style={{ color: "red", fontSize: 24 }} />}
          </td>
        );
      }
    }
  };

  const deleteCart = (index) => {
    props.setCart(props.cart.filter((item, i) => i !== index))
  }

  return (
    <div className="m-0 d-flex flex-column justify-content-center align-items-center">
      {_.map(tablePuertas, (elem, key) => {
        return (
          <div className="divTable m-auto" key={key}>
            <h3 className="mt-3 ml-3 mb-0 text-center">{key}</h3>
            <table style={{ borderRadius: "10px", border: "2px solid grey" }} className="d-flex m-auto text-center ">
              <tbody>
                <tr style={{ backgroundColor: "#797A74", color: "white" }} className="col-11 m-auto p-0">
                  <td className="py-1 px-3">Ref</td>
                  {_.map(elem, (head, key) => {
                    return (
                      <td className="py-1 px-3" key={head.name}>
                        {head.name}
                      </td>
                    );
                  })}
                  {key === "Generar puerta" && <td className="py-1 px-3">Cant</td>}
                  {key === "Generar puerta" && <td className="py-1 px-3">Prec. unit</td>}
                  <td className="py-1 px-3">Total</td>
                </tr>

                {_.map(props.cart, (elem2, index) => {
                  return (
                    <tr key={index}>
                      {key === "Generar puerta" && (
                        <td className="py-1 px-2">
                          <input onChange={(e) => setRef(e.target.value)} className="text-center" style={{ width: "100px" }} type="text" min="1" defaultValue={1} />
                        </td>
                      )}
                      {key === "Accesorios" && <td className="py-1 px-2">{ref}</td>}
                      {_.map(elem, (head, key) => {
                        return (
                          <td className="py-1 px-2" key={key}>
                            {props.cart[index][head.hardValue] !== "" ? props.cart[index][head.hardValue] : <CloseIcon style={{ color: "red", fontSize: 24 }} />}
                          </td>
                        )
                      })}
                      {key === "Generar puerta" && (
                        <td className="py-1 px-2">
                          <input onChange={(e) => setCant(e.target.value)} className="text-center" style={{ width: "50px" }} type="number" min="1" defaultValue={1} />
                        </td>
                      )}
                      {key === "Generar puerta" && (
                        <td className="d-flex align-items-center py-1 px-2">
                          <span>$</span>
                          <input onChange={(e) => setPrice(e.target.value)} className="text-center" style={{ width: "50px" }} type="number" min="1" defaultValue={1} />
                        </td>
                      )}
                      {key === "Generar puerta" && (
                        <td className="py-1 px-2">
                          <span> US$ {cant * price}</span>
                        </td>
                      )}
                      {key === "Accesorios" && (
                        <td className="py-1 px-2">
                          <span> Precio</span>
                        </td>
                      )}
                      {key === "Generar puerta" && (
                        <>
                          <td className="py-1 px-2">
                            <button className="btn btn-sm btn-info" onClick={() => props.editComponent(index)}> Editar</button>
                          </td>

                          <td className="py-1 px-2">
                            <button className="btn btn-sm btn-danger" onClick={() => props.deleteComponent(index)}> Eliminar</button>
                          </td>
                        </>
                      )
                      }
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
      <div className="d-flex justify-content-around">
        <button
          className="btn btn-primary m-auto mt-3"
          onClick={() => {
            props.dispatch(showModal());
          }}
        >
          Generar Pdf
        </button>
        <button
          className="btn btn-primary m-auto mt-3"
          onClick={() => {
            props.addTocart();
          }}
        >
          Generar Otra puerta
        </button>
      </div>
    </div>
  );
};

export default CotizacionPuertas;
