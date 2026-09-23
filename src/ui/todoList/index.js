import './TodoList.css';
import React from 'react';

function TodoList(props) {

    const renderFunc = props.children || props.render;

    return (
        // para validaciones llamamos las propiedades y funciones del comp. TodoList en App
        <section clasName='TodoList-container'>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

            {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}

            <ul>
                {/* Nos referimos a los elementos hijos de la lista en el archivo TodoItem.js */}
                {props.children}
            </ul>

        </section>
    );

}
export { TodoList };