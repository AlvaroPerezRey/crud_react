import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contenedor from './components/Contenedor'

/*
const element = (
  <div>
    <h1>CRUD</h1>
    <ol>
      <li>Crear una interfaz para una aplicación de tipo CRUD. Utilizaremos un array para almacenar los elementos y realizará las siguientes funciones.</li>
      <ol>
        <li><b>Crear</b>: Crear nuevos elementos</li>
        <li><b>Leer</b>: Mostrar elementos</li>
        <li><b>Borrar hechos</b>: Borrar elementos que están marcados como hechos</li>
      </ol>
    </ol>
    <hr/>
    <Contenedor />
    <hr/>
    <h2>Para practicar:</h2>
    <p>
      Dar funcionalidad a los componentes <i>Crear</i>, <i>Leer</i> y al elemento <i>Borrar hechos</i>
    </p>
  </div>
);
*/

/*
const element = (
  <div className='app'>
      <h1>CRUD</h1>
      <fieldset className='crud-input'>
          <legend className='crud-input__label'>Nuevo elemento </legend>
          <input className='crud-input__input' placeholder='Introduzca el elemento'/>
      </fieldset>
      <ul className='crud-list'>
          {elems.map(({text,done}, i) => (
            <li className={`crud-list__item ${done? 'crud-list__item--done':''}`}>
                <label htmlFor={`e${i}`}>
                  <input id={`e${i}`} type='checkbox' checked={done}/>
                  {text}
                </label>
            </li> 
          ))}
      </ul>
      <button className='crud-clear' type='button'>Borrar hechos</button>
  </div>
)
*/

ReactDOM.render(
  <Contenedor />,
  document.getElementById('root')
);