import React from 'react';

// Custom hook del localStorage: useLocalStorage
function useLocalStorage(itemName, initialValue) {
    
    //Creamos estados
    const [item, setItem] = React.useState(initialValue);

    const [loading, setLoading] = React.useState(true);

    const [error, setError] = React.useState(false);

    // implementacion del useEffect, Procesamiento de datos
    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);

                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                }else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }

                setLoading(false);
            } catch(error) {
                setLoading(false);
                setError(true);
            }
        }, 2000);
    }, []);

    //Actualizamos la info
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    //Retornamos la info
    return {
        item, 
        saveItem, 
        loading, 
        error,
    };
}

export { useLocalStorage };

// localStorage.removeItem('TODOS_V1');

// //Array con objetos de cada TODo
// const defaultTodos = [
//   {text:'tomar agua', completed: true},
//   {text:'comprar el almuerzo', completed: true},
//   {text:'Hacer ejercicio', completed: true},
//   {text:'Organizar casa', completed: false},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
