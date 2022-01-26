import React, { useState } from "react";

function Crear({onNewTarea}){
    let [newElemText, setNewElemText]=useState('');
    return(
        <fieldset className="crud-input">
        <legend className="crud-input__label">Nuevo elemento</legend>
        <input className="crud-input__input" placeholder="Introduzca el elemento"
        value={newElemText}
            onChange = {e => setNewElemText(e.target.value)}
            onKeyUp = {
                (e) => {
                    if(e.key === 'Enter' && newElemText.length){
                        onNewTarea({done: false, text: newElemText});
                        setNewElemText('');
                    }
                }
            }/>
        </fieldset>);
}

export default Crear;