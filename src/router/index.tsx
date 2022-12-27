import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { itemsCaballero, itemsDama, itemsInfantil } from '../db/cardContainer';
import Layout from '../layout/Layout';
import NotFoundPage from '../pages/NotFoundPage';
import SelectPage from '../components/selectPage/SelectPage';
import CardContainer from '../components/cardContainer/CardContainer';
import CardList from '../components/cardList/CardList';
import Card from '../components/card/Card';
import { dbTenisMan, dbClothesWoman, dbTenisWoman, dbClothesMan, dbClothesChild, dbTenisChild } from '../db/tenisMan';
import Cart from '../components/cart/Cart';

const router = createBrowserRouter([
  {
    path: '/jade-vans/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/jade-vans/cart',
        element: <Cart />
      },
      {
        path: '/jade-vans/',
        element: <SelectPage />,
      },
      {
        path: '/jade-vans/Dama',
        element: (
          itemsDama.map((item)=><CardContainer text={item.text} imgUrl={item.imgUrl} />)
        ),
      },
      {
        path: '/jade-vans/Dama/ropa',
        element: (<CardList items={dbClothesWoman} />),
      },
      {
        path: '/jade-vans/Dama/ropa/:id',
        element: <Card  />
      },
      {
        path: '/jade-vans/Dama/calzado',
        element: <CardList items={dbTenisWoman} />,
      },
      {
        path: '/jade-vans/Dama/calzado/:id',
        element: <Card />
      },
      {
        path: '/jade-vans/Caballero',
        element: (
          itemsCaballero.map((item)=><CardContainer text={item.text} imgUrl={item.imgUrl} />)
        ),
      },
      {
        path: '/jade-vans/Caballero/ropa',
        element: <CardList items={dbClothesMan} />,
      },
      {
        path: '/jade-vans/Caballero/ropa/:id',
        element: <Card />
      },
      {
        path: '/jade-vans/Caballero/calzado',
        element: <CardList items={dbTenisMan} />,
      },
      {
        path: '/jade-vans/Caballero/calzado/:id',
        element: <Card />
      },
      {
        path: '/jade-vans/Infantil',
        element: (
          itemsInfantil.map((item)=><CardContainer text={item.text} imgUrl={item.imgUrl} />)
        ),
      },
      {
        path: '/jade-vans/Infantil/ropa',
        element: <CardList items={dbClothesChild} />,
      },
      {
        path: '/jade-vans/Infantil/ropa/:id',
        element: <Card />,
      },
      {
        path: '/jade-vans/Infantil/calzado',
        element: <CardList items={dbTenisChild} />,
      },
      {
        path: '/jade-vans/Infantil/calzado/:id',
        element: <Card />
      },
    ],
  },
]);

export default router;
