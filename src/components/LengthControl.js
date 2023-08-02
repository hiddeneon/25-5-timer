import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretUp } from '@fortawesome/free-solid-svg-icons';

export default function LengthControl({ name, id, value, inc, dec }) {

    return (
        <div id={id}>
            <label className="length-label">{name} length</label>
            <div className="buttons">
                <button onClick={() => dec(value, name)}><FontAwesomeIcon icon={faSquareCaretUp} size='2xl' rotation={180} className='decrease-btn' /></button>
                <p className='length-value'>{value}</p>
                <button onClick={() => inc(value, name) }><FontAwesomeIcon icon={faSquareCaretUp} size='2xl' className='increase-btn' /></button>
            </div>
        </div>
    )
}