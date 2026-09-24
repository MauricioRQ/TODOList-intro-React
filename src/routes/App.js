
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { NewTodoPage } from './new/NewTodoPage';
import { HomePage } from './home/HomePage';
import { EditTodoPage } from './edit/EditTodoPage';


function App() {

    return (
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/new' element={<NewTodoPage />} />
          <Route path='/edit/:text' element={<EditTodoPage />} />
          <Route path='*' element={<p>Not Found</p>} />
        </Routes>
      </HashRouter>
    );
}

export  { App };


