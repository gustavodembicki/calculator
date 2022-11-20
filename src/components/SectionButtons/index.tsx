import React from 'react';
import ButtonRow from './ButtonRow';

type SectionButtonsProps = {
    onClick: any
}

export default function SectionButtons(props: SectionButtonsProps) {
    return (
        <section className='calc-buttons' onClick={props.onClick}>
            {/* <div className="calc-button-row">
                <Button line={1} />
            </div>
        
            <div className="calc-button-row">
                <Button line={2} />
            </div>
        
            <div className="calc-button-row">
                <Button line={3} />
            </div>
            
            <div className="calc-button-row">
                <Button line={4} />
            </div>
            
            <div className="calc-button-row">
                <Button line={5} />
            </div> */}
            <ButtonRow lines={[1, 2, 3, 4, 5]} />
        </section>
    );
}