import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../todoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal'; 
import { TodoForm } from '../TodoForm'; 
import { TodoContext } from '../TodoContext';  



function AppUI() {

    //Utilizamos el useContext especificando el contexto a utilizar, llamando las props que necesitamos.
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        // Solo bastan los "<>" e importar React, Para poder renderizar App en el html.
        <>
            <TodoCounter />

            <TodoSearch />

            
            <TodoList>
                {loading && (
                    <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>
                )}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

                {searchedTodos.map(todo => (
                    < TodoItem 
                        key = {todo.text} 
                        text = {todo.text}
                        completed = {todo.completed}
                        onComplete = {() => completeTodo(todo.text)}
                        onDelete = {() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
                

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </>
    );
}

export { AppUI };