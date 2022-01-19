import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const element = (
  <div>
    <Title />
    <Welcome name={user.name}></Welcome>
    <Definitions></Definitions>
    <Comment author={user}></Comment>
    <HowItWorks></HowItWorks>
    <hr/>
    <Footnote id="1" description="Los componentes son reutilizables, como ves en estas notas que estamos escribiendo."></Footnote>
    <Footnote id="2" description="Los componentes que tú crees siempre deben empezar con MAYÚSCULA, porque si empiezan por minúscula, React lo tomará como una etiqueta DOM."></Footnote>
    <Footnote id="3" description="Los componentes, pueden formar parte de otros componentes, mira el componente Comment"></Footnote>
    <Footnote id="4" description="Las funciones de un componente nunca deben modificar las entradas."></Footnote>
    <Footnote id="5" description="Podemos llamar a multiples componentes dentro de un componente."></Footnote>
  </div>
);

const App = () => (
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

ReactDOM.render(
  element,
  document.getElementById('root')
);

/* contenedor 
    crear
    leer
        lista
        item
              */