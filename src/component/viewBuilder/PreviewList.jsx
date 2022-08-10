import React, { useState, useEffect } from "react";
import { CardDetail } from "../reactComponents/cardDetail";

export const PreviewList = (props) => {
    return (
        <>
            {props.components.map((elem, it) => {
                return (
                    <div key={it} type="button" className="m-3 col-5">
                        <CardDetail data={elem} />
                    </div>
                );
            })}
        </>
    );
};
