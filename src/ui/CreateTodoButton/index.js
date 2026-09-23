import'./CreateTodoButton.css';


// En el evento onClick enviamos una funcion(setOpenModal) que recibe el estado anterior(state) y retorna la negacion o lo contrario de ese estado(!state).

function CreateTodoButton ({ setOpenModal }) {
    return (
        <button className="CreateTodoButton"
            onClick={
                () => {
                    setOpenModal(state => !state);
                }
            }
        > + </button>
    );
}

export { CreateTodoButton };