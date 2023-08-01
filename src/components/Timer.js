import React from "react";

export default function Timer({ minutes, seconds, isPeriod }) {
    return (
        <div class="timer-body">
            <label id="timer-label">{isPeriod}</label>
            <div id="time-left">{minutes}:{seconds}</div>
        </div>
    )
}