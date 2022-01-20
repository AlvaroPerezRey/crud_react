import React from 'react';
import Lista from './Lista'

const Leer = ({elems}) => (
    <ul className="crud-list">
        {elems.map(({text, done}, i) => (
            <Lista text={text} done={done} i={i} />
        ))}
    </ul>
);

export default Leer;