import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import CardContainer from "../cardContainer/CardContainer";
import Header from "../header/Header";
import Example from "../../Example";
import {
  itemsCaballero,
  itemsDama,
  itemsInfantil,
} from "../../db/cardContainer";

const VansRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="caballero"
          element={itemsCaballero.map((item, index) => (
            <CardContainer key={index} text={item.text} imgUrl={item.imgUrl} />
          ))}
        />
        <Route
          path="Dama"
          element={itemsDama.map((item, index) => (
            <CardContainer key={index} text={item.text} imgUrl={item.imgUrl} />
          ))}
        >
          <Route path="ropa" element={<Example />} />
          <Route path="calzado" element={<h4>Holaaaaaaaaaaaaaaaaa</h4>} />
        </Route>
        <Route
          path="infantil"
          element={itemsInfantil.map((item, index) => (
            <CardContainer key={index} text={item.text} imgUrl={item.imgUrl} />
          ))}
        />
      </Routes>
    </>
  );
};

export default VansRoutes;
