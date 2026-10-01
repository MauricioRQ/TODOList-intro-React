
import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {

    //Capturamos la info del localStorage
    const {
        item: todos, 
        saveItem: saveTodos, 
        sincronizeItem: sincronizeTodos,
        loading, 
        error,
    } = useLocalStorage('TODOS_V2', []);

    //Estado del Buscador
    const [searchValue, setSearchValue] = React.useState('');

    //filtramos cuantos to-dos tienen la propiedad completed = true, para el dato del counter
    const completedTodos = todos.filter(
        todo => !!todo.completed
    ).length;

    //Extraemos la longitud del array del To-dos para el counter y asi tener... ejem: ( 2 tareas de 5)
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        }
    );

    //Agregar ToDo
    const addTodo = (text) => {

        if (!text) {
            alert('Debes escribir algo...');
        } else {
            const id = newTodoId(todos);
            const newTodos = [...todos];
            newTodos.push({
                id,
                text,
                completed: false,
            });
            saveTodos(newTodos);
        }
    };

    // get text for edit TODO
    const getTodo = (id) => {
        const todoIndex = todos.findIndex(
            (todo) => todo.id === id
        );

        return todos[todoIndex];
    }

    // Check Todos completados
    const completeTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    // Edit Todos completados
    const editTodo = (id, newText) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
        );
        newTodos[todoIndex].text = newText;
        saveTodos(newTodos);
    };

    //Eliminar Todos
    const deleteTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    //Actualizadores de estado
    const state = {
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        searchedTodos,
        getTodo,
    };

    //la prop. value va a contener todos nuestros estados, propiedades...
    const stateUpdaters = {
        setSearchValue,
        completeTodo,
        addTodo,
        deleteTodo,
        editTodo,
        sincronizeTodos,
    }; 

    return { state, stateUpdaters };
}

function newTodoId(todoList) {

    if (!todoList.length) {
        return 1;
    }
    const idList = todoList.map(todo => todo.id);
    const idMax = Math.max(...idList);
    return idMax + 1;
}

export { useTodos };