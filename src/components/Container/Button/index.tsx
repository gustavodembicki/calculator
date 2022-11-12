import React from 'react';
import Button from '../../Button';

type ButtonRowProps = {
    names: string[];
}

export default function ButtonRow(props: ButtonRowProps) {
    function buttonClicked(e: any) {
        console.log(e.target);
    }

    return (
        <div className="calc-buttons">
            {/* {props.names.forEach((name) => {
                <Button 
                    className={`calc-button ${name}`}
                    id={`calc-button ${name}`}
                    text={name}
                    type='button'
                    function={(e: Event) => buttonClicked(e)}
                />
            })} */}
            <Button 
                className='calc-button double'
                id='calc-button double'
                text='C'
                type='button'
                function={(e: Event) => buttonClicked(e)}
            />

            <Button 
                className='calc-button'
                id='calc-button'
                text='&larr;'
                type='button'
                function={(e: Event) => buttonClicked(e)}
            />
        </div>
    );
}