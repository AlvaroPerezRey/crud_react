import React from 'react';
import Lista from './Lista'

const Leer = ({elems, onElemsChange}) => (
    <ul className="crud-list">
        {elems.map(({text, done}, i) => (
            <Lista text={text} done={done} i={i} 
                onDoneChange={value => { const updateElementos = [elems];
                    updateElementos[i].done = value;
                    onElemsChange(updateElementos);
                }
            }/>
        ))}
    </ul>
);

export default Leer;