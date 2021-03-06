import React, {useState} from 'react';
import Borrar from './Borrar';
import Crear from './Crear'
import Leer from './Leer'

const listaInicial = [
    { 
        text: 'Hacer TicTacToe', 
        done: true 
    },
    { 
        text: 'Hacer CRUD', 
        done: false 
    },
    { 
        text: 'Personalizar TicTacToe', 
        done: true 
    },
    { 
        text: 'Personalizar CRUD', 
        done: false 
    }
];

const Contenedor = () => {
    const [elems, setElementos] = useState(listaInicial);

    return(
        <div className="app">
        <h1>CRUD</h1>
        <Crear onNewTarea={elem => setElementos([...elems,elem])}/>
        <Leer elems={elems} onElemsChange={elems => setElementos(elems)}/>
        <Borrar elems={elems} onElemsChange={elems => setElementos(elems)}/>
        </div>
    );
}

/*
const Contenedor = () => (
    <div className="app">
        <h1>CRUD</h1>
        <Crear />
        <Leer elems={elems}/>
        <button className="crud-clear" type="button">Borrar</button>
    </div>
);
*/

export default Contenedor;