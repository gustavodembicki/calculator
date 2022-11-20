import React from 'react';
import Button from '../Button';
import './style.css';

type ButtonRowProps = {
    lines: number[]
}

export default function ButtonRow(props: ButtonRowProps) {
    function buttonRowReturned(lines: number[]): any {
        let value = lines.map((line) => {
            return <div className='calc-button-row' key={`row-${line}`}>
                <Button line={line} />
            </div>
        });

        return value;
    }
    
    return buttonRowReturned(props.lines);
}