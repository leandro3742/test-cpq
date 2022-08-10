import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <div className="m-3">
                <img src="https://www.essenltda.uy/clientdata/templates/web/images/custom/logo.png" alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center w-100 h-75">
                <div>
                    <Link to="/essen">
                        <button style={{ backgroundColor: "#797A74", color: "white" }} className="btn m-5">
                            Cotizar ruedas
                        </button>
                    </Link>
                    <Link to="/essen/puertas">
                        <button style={{ backgroundColor: "#DD161B", color: "white" }} className="btn m-5">
                            Cotizar puertas
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;
