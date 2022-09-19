import React from 'react'
import { useSelector } from "react-redux";
import '../../styles/spinner.css'

const Spinner = () => {
    const { spinnerState } = useSelector((state) => state.spinner);
    return (
        <>
            {spinnerState &&
                <div className="spinner-container">
                    <div className="loading-spinner">
                    </div>
                </div>
            }
        </>
    )
}

export default Spinner