import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import SelectPage from './components/selectPage/SelectPage';
import Header from './components/header/Header';
import { CARD_CONTAINER } from './db/cardContainer';
import './components/selectPage/selectPage.scss';
import NotFoundPage from './pages/NotFoundPage';
import VansRoutes from './components/routes/VansRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <div className='divContainer' >
            {
              CARD_CONTAINER.map(item=>(
                <SelectPage key={item.text} text={item.text} imgUrl={item.imgUrl} />))
            }
            </div>
            <Outlet />
          </>
        } />
        <Route path='/*' element={<VansRoutes />} >
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;