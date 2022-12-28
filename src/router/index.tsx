import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { itemsCaballero, itemsDama, itemsInfantil } from "../db/cardContainer";
import Layout from "../layout/Layout";
import NotFoundPage from "../pages/NotFoundPage";
import SelectPage from "../components/selectPage/SelectPage";
import CardContainer from "../components/cardContainer/CardContainer";
import CardList from "../components/cardList/CardList";
import Card from "../components/card/Card";
import {
  dbTenisMan,
  dbClothesWoman,
  dbTenisWoman,
  dbClothesMan,
  dbClothesChild,
  dbTenisChild,
} from "../db/tenisMan";
import Cart from "../components/cart/Cart";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <SelectPage />,
        errorElement: <NotFoundPage />,
      },
      
      {
        path: "cart",
        errorElement: <NotFoundPage />,
        element: <Cart />,
      },
      {
        path: "Dama",
        errorElement: <NotFoundPage />,
        element: itemsDama.map((item) => (
          <CardContainer key={item.imgUrl} text={item.text} imgUrl={item.imgUrl} />
        ))
      },
      {
        path: "Dama/ropa",
        errorElement: <NotFoundPage />,
        element: <CardList items={dbClothesWoman} />,
      },
      {
        path: "Dama/ropa/:id",
        errorElement: <NotFoundPage />,
        element: <Card />,
      },
      {
        path: "Dama/calzado",
        errorElement: <NotFoundPage />,
        element: <CardList items={dbTenisWoman} />,
      },
      {
        path: "Dama/calzado/:id",
        errorElement: <NotFoundPage />,
        element: <Card />,
      },
      {
        path: "Caballero",
        errorElement: <NotFoundPage />,
        element: itemsCaballero.map((item) => (
          <CardContainer key={item.imgUrl} text={item.text} imgUrl={item.imgUrl} />
        )),
      },
      {
        path: "Caballero/ropa",
        errorElement: <NotFoundPage />,
        element: <CardList items={dbClothesMan} />,
      },
      {
        path: "Caballero/ropa/:id",
        errorElement: <NotFoundPage />,
        element: <Card />,
      },
      {
        path: "Caballero/calzado",
        errorElement: <NotFoundPage />,
        element: <CardList items={dbTenisMan} />,
      },
      {
        path: "Caballero/calzado/:id",
        errorElement: <NotFoundPage />,
        element: <Card />,
      },
      {
        path: "Infantil",
        errorElement: <NotFoundPage />,
        element: itemsInfantil.map((item) => (
          <CardContainer key={item.imgUrl} text={item.text} imgUrl={item.imgUrl} />
        )),
      },
      {
        path: "Infantil/ropa",
        errorElement: <NotFoundPage />,
        element: <CardList items={dbClothesChild} />,
      },
      {
        path: "Infantil/ropa/:id",
        errorElement: <NotFoundPage />,
        element: <Card />,
      },
      {
        path: "Infantil/calzado",
        errorElement: <NotFoundPage />,
        element: <CardList items={dbTenisChild} />,
      },
      {
        path: "Infantil/calzado/:id",
        errorElement: <NotFoundPage />,
        element: <Card />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: "/jade-vans" });

export default router;
