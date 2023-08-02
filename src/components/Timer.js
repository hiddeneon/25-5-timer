/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

export default function Timer({ minutes, seconds, isPeriod }) {

    const alertStyle = css({
        color: 'red'
    });

    const normalStyle = css({
        color: 'white'
    });

    return (
        <div class="timer-body">
            <label id="timer-label">{isPeriod}</label>
            <div css={minutes === '00' || (minutes === '01' && seconds === '00') ? alertStyle : normalStyle} id="time-left">{minutes}:{seconds}</div>
        </div>
    )
}