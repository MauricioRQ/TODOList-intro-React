import React from 'react';
import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos, loading}) {
    
    return(
        <
            h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
        >
            ¡Has completado <span>{completedTodos}</span>  de <span>{totalTodos}
            </span> items!
        </h2>
    );
}

export { TodoCounter};
