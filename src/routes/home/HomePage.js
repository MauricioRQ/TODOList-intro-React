
import React from 'react';
import { useTodos } from '../useTodos';
import { TodoHeader } from '../../ui/TodoHeader';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodoList } from '../../ui/todoList';
import { TodoItem } from '../../ui/TodoItem';
import { TodosLoading } from '../../ui/TodosLoading';
import { TodosError } from '../../ui/TodosError';
import { EmptyTodos } from '../../ui/EmptyTodos';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { Modal } from '../../ui/Modal'; 
import { TodoForm } from '../../ui/TodoForm'; 
import { ChangeAlert } from '../../ui/ChangeAlert'; 


function HomePage() {

    //Utilizamos el useTodos, llamando las props que necesitamos.
    const { state, stateUpdaters } = useTodos();

    //Estados
    const {
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        searchedTodos,
        openModal,
    } = state;

    //Actualizadores de estados
    const {
        completeTodo,
        setSearchValue,
        addTodo,
        deleteTodo,
        setOpenModal,
        sincronizeTodos,
    } = stateUpdaters;

        return (
        <>
            <TodoHeader loading= {loading}>
            <TodoCounter 
                completedTodos={completedTodos}
                totalTodos={totalTodos}
            />

            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            /> 
            </TodoHeader>

            {/* Render props - Render Functions */}
            <TodoList
            // Render props
            error={error}
            loading={loading}
            searchedTodos={searchedTodos}
            totalTodos={totalTodos}
            searchText={searchValue}

            // Render Functions
            onError={() => <TodosError/>}
            onLoading={() => <TodosLoading/>}
            onEmptyTodos={() => <EmptyTodos/>}
            onEmptySearchResults={
                (searchText) => <p>No hay resultados para {searchText}</p>}
            
            //   render={todo => (
            //   <TodoItem
            //     key={todo.text} 
            //     text = {todo.text}
            //     completed = {todo.completed}
            //     onComplete = {() => completeTodo(todo.text)}
            //     onDelete = {() => deleteTodo(todo.text)}
            //   />
            // )}
            >
            {todo => (
                <TodoItem
                key={todo.text} 
                text = {todo.text}
                completed = {todo.completed}
                onComplete = {() => completeTodo(todo.text)}
                onDelete = {() => deleteTodo(todo.text)}
                />
            )}
            </TodoList>

            <CreateTodoButton
            setOpenModal={setOpenModal}
            />

            {!!openModal && (
            <Modal>
                <TodoForm 
                addTodo={addTodo}
                setOpenModal={setOpenModal}
                />
            </Modal>
            )}

            <ChangeAlert
            sincronize={sincronizeTodos}
            />
        </>
        );
}

export { HomePage };
