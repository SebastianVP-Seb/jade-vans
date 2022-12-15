import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import SelectPage from './SelectPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
        <>
          <SelectPage />
          <Outlet />
        </>
      } />
        <Route index element={<h1>Home</h1>} />
        <Route path='caballero' element={<h1>Caballero</h1>} />
        <Route path='dama' element={<h1>Dama</h1>} />
        <Route path='infantil' element={<h1>Infantil</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;