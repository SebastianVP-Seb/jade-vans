// import React from "react";
// import { Routes, Route, Outlet } from "react-router-dom";
// import CardContainer from "../cardContainer/CardContainer";
// import Header from "../header/Header";
// import CardList from '../cardList/CardList';
// import {
//   itemsCaballero,
//   itemsDama,
//   itemsInfantil,
// } from "../../db/cardContainer";

// const VansRoutes = () => {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="caballero">
//           <Route index element={itemsCaballero.map((item, index) => (
//             <CardContainer key={index} text={item.text} imgUrl={item.imgUrl} />
//           ))} />
//           {/* <Route path="ropa" element={<CardList />} > */}
//           <Route index path="ropa" element={<CardList />} />
//             <Route path=":id" element={<p>Holaaa</p>} />
          
//           {/* </Route>   */}
//           <Route path="calzado" element={<CardList />} >

//           </Route>
//         </Route>

//         <Route path="dama" >
//           <Route index element={itemsDama.map((item, index) => (
//             <CardContainer key={index} text={item.text} imgUrl={item.imgUrl} />
//           ))} />
//           <Route path="ropa" element={<CardList />} >
          
//           </Route>
//           <Route path="calzado" element={<CardList />} >

//           </Route>
//         </Route>
//         <Route path="infantil">
//           <Route index element={itemsInfantil.map((item, index) => (
//             <CardContainer key={index} text={item.text} imgUrl={item.imgUrl} />
//           ))}/>
//           <Route path="ropa" element={<CardList />} >
          
//           </Route>
//           <Route path="calzado" element={<CardList />} >
            
//           </Route>
//         </Route>
//       </Routes>
//     </>
//   );
// };

// export default VansRoutes;
