import React from "react";
import { TodoForm } from '../../ui/TodoForm'; 


function EditTodoPage() {
    return (
        <TodoForm 
            label='Edita tu ToDo'
            submitText='Editar'
            submitEvent={() => console.log('llamar a editToDo')}
        />
    );
}

export { EditTodoPage };