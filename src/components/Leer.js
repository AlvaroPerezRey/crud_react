import React from 'react';
import Item from './Item'

const Leer = ({elems, onElemsChange}) => (
    <ul className="crud-list">
        {elems.map(({text, done}, i) => (
            <li key={i} className={`crud-list__item ${done? 'crud-list__item--done':''}`}>
                <Item text={text} done={done} i={i} 
                    onDoneChange={value => { const updateElems = [ ...elems ];
                        updateElems[i].done = value;
                        onElemsChange(updateElems);
                    }
                }/>
                <button onClick={() => {
                    const acciones = [...elems]
                    acciones.splice(i,1)
                    onElemsChange(acciones);
                    }
                }>Borrar tarea </button>

            </li>
        ))}
    </ul>
);

export default Leer;