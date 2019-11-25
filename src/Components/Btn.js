import React from 'react'

export default function Btn(props) {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    )
}
