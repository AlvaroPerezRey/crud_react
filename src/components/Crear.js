import React, { useState } from "react";

function Crear({onNewTarea}){
    let [tarea,setTarea]=useState('');
    return(
        <fieldset className="crud-input">
        <legend className="crud-input__label">Nuevo elemento</legend>
        <input className="crud-input__input" placeholder="Introduzca el elemento"
        value={tarea}
            onChange={e=>setTarea(e.target.value)}
            onKeyUp={
                (e)=>{
                    if(e.key==='Enter' && tarea.length){
                        onNewTarea({done: false, text: tarea});
                        setTarea('');
                    }
                }
            }/>
        </fieldset>);
}

export default Crear;