
import React from "react";
import { useLocalStorage } from "./useLocalStorage";

//Creamos el contexto
const TodoContext = React.createContext();


function TodoProvider({ children }) {

    //Capturamos la info del localStorage
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error,
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');

    //Estado del Modal
    const [openModal, setOpenModal] = React.useState(false);

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
            const newTodos = [...todos];
            newTodos.push({
                text,
                completed: false,
            });
            saveTodos(newTodos);
        }

    };

    // Check Todos completados
    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    //Eliminar Todos
    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    //la prop. value va a contener todos nuestros estados, propiedades...
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            addTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider };