
import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';
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
import { ChangeAlert } from '../ChangeAlert'; 


function App() {

  //Utilizamos el useTodos, llamando las props que necesitamos.
  const { state, stateUpdaters } = useTodos();

  //Estados
  const {
    loading,
    error,
    totalTodos,
    completeTodo,
    completedTodos,
    searchValue,
    searchedTodos,
    openModal,
  } = state;

  //Actualizadores de estados
  const {
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

export default App;
