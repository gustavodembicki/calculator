import React from 'react';
import ButtonRow from '../Button';

type ContainerWrapperProps = {
    message: string
}

export default function ContainerWrapper(props: ContainerWrapperProps) {
    return (
        <div className="wrapper">
            {props.message}
            <ButtonRow 
                names={["C", "&laar;", "&divide;"]} 
            />
        </div>
    );
}