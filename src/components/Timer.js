import React from "react";

export default function Timer({ minutes, seconds }) {
    return (
        <div class="timer-body">
            <label id="timer-label">{"props.current"}</label>
            <div id="time-left">{minutes}:{seconds}</div>
        </div>
    )
}