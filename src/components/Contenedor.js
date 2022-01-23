import React, {useState} from 'react';
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
    const [elementos, setElementos] = useState(listaInicial);

    return(
        <div className="app">
        <h1>CRUD</h1>
        <Crear onNewTarea={elem => setElementos([elem,elementos])}></Crear>
        <Leer elems={elementos} onElemsChange={elms => setElementos(elms)}></Leer>
        <button className="crud-clear" type="button">Borrar</button>
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