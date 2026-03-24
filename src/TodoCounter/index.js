import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    //Utilizamos el useContext especificando el contexto a utilizar, llamando las props que necesitamos.
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext)

    return(
        <h1 className='TodoCounter'>
            ¡Has completado <span>{completedTodos}</span>  de <span>{totalTodos}
            </span> items!
        </h1>
    );
}

export { TodoCounter};
