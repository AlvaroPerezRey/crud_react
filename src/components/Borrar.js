import React from 'react';

const Borrar = ({elems, onElemsChange}) => {

    return (<button className="crud-clear" type="button" 
    onClick={() => onElemsChange(elems.filter(elem => !elem.done))}>Borrar hechos</button>)
};

export default Borrar;