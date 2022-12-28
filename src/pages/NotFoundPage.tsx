import React from "react";
import { Link, useRouteError } from "react-router-dom";

const NotFoundPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <p>Esta dirección no está disponible, ir a la página de inicio</p>
      <Link to="/">Volver</Link>
    </div>
  );
};

export default NotFoundPage;
