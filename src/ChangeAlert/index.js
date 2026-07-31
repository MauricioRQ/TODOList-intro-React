import React from 'react';
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css';

function ChangeAlert({ sincronize }) {

    const { show, toggleShow } = useStorageListener(sincronize);

    if(show) {
        return (
            <div className='ChangeAlert-bg'>
                <div className='ChangeAlert-container'>
                    <p>Parece que cambiaste tus ToDo's en otra pestaña o ventana</p>
                    <p>¿Quieres sincronizar tus ToDo's?</p>
                    <button 
                        className='TodoForm-button TodoForm-button--add'
                        onClick={(toggleShow) =>{window.location.reload();}}
                    >
                        Yes!
                    </button>
                </div>
            </div>
        );
    } else {
        return null;
    }
    
}


export { ChangeAlert };
