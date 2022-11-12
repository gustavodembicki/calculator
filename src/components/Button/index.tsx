import React from 'react';

type ButtonAssets = {
    className: string
    text: string
    id: string
    function?: any
    type: "button" | "submit" | "reset",
}

export default function Button(props: ButtonAssets) {
    return (
        <button 
            className={props.className} 
            type={props.type} 
            id={props.id}
            onClick={props.function}
        >
            {props.text}
        </button>
    );
}