import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretUp } from '@fortawesome/free-solid-svg-icons';

export default function LengthControl({ name, id, value, inc, dec }) {

    return (
        <div id={id + '-label'}>
            <label className="length-label">{name} Length</label>
            <div className="buttons">
                <button id={id + '-decrement'} onClick={() => dec(value, name)}><FontAwesomeIcon icon={faSquareCaretUp} size='2xl' rotation={180} className='decrease-btn' /></button>
                <p id={id + '-length'} className='length-value'>{value}</p>
                <button id={id + '-increment'} onClick={() => inc(value, name) }><FontAwesomeIcon icon={faSquareCaretUp} size='2xl' className='increase-btn' /></button>
            </div>
        </div>
    )
}