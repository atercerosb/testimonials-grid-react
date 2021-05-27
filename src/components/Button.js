import React from 'react'
import './styles/Button.css'

export default function Button(props) {
    return (
        <>
            <button id={props.id}>{props.content}</button>   
        </>
    )
}
