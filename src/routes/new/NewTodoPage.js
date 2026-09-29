import React from "react";
import { TodoForm } from '../../ui/TodoForm'; 


function NewTodoPage() {
    return (
        <TodoForm 
            label='Escribe tu nuevo ToDo'
            submitText='Añadir'
            submitEvent={() => console.log('llamar a addToDo')}
        />
    );
}

export { NewTodoPage };