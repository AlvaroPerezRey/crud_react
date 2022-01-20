import React from 'react';
import Crear from './Crear'
import Leer from './Leer'

const elems = [
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

const Contenedor = () => (
    <div className="app">
        <h1>CRUD</h1>
        <Crear />
        <Leer elems={elems}/>
        <button className="crud-clear" type="button">Borrar</button>
    </div>
);

export default Contenedor;