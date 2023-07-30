import React from "react";

export default function LengthControl({ name, id, value, inc, dec }) {

    return (
        <div id={id}>
            <label>{name} Length</label>
            <div className="buttons">
                <button onClick={() => dec(value, name)}>v</button>
                <p>{value}</p>
                <button onClick={() => inc(value, name)}>^</button>
            </div>
        </div>
    )
}