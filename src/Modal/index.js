import React from "react";
import ReactDOM from 'react-dom';
import './Modal.css';


// En el return creamos el modal, 
// seguido del return, seleccionamos el componente del modal en el index.html
// creamos un div el cual va aparecer en la app

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            { children }
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };