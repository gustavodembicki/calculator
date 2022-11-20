import React from 'react';
import "./style.css";

type ScreenProps = {
    value: number|string
}

export default function Screen(props: ScreenProps) {
    return (
        <section className='screen'>
            {props.value}
        </section>
    );
}