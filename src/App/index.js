
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

function App() {

  // Llamamos la AppUI por medio de TodoProvider que contiene todas las propiedades y estados, pasamos todas estas de un compnente padre a un compnente hijo.
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
