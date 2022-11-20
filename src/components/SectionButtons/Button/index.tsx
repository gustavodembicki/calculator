import React from 'react';
import { decode } from 'html-entities';
import { buttonLines } from '../../../constants';
import './style.css';

type ButtonProps = {
    line: number;
}

export default function Button(props: ButtonProps) {
    function buttonVerify(line: number): JSX.Element {    
        let button = buttonLines[line].map((values: {class: string, value: string|number}) => {
            return <button className={values.class} key={`${line}-button-${values.value}`}>
                {
                    typeof(values.value) == 'string' 
                        ? decode(values.value) 
                        : values.value
                }
            </button>;
        });

        return button;
    }
    
    return buttonVerify(props.line);
}