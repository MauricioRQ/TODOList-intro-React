import './TodoList.css';

function TodoList ( {children} ){
    return (
        <ul>
            {/* Nos referimos a los elementos hijos de la lista en el archivo TodoItem.js */}
            {children}
        </ul>
    );

}
export { TodoList };