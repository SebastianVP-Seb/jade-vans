import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
        <p>Esta dirección no está disponible, ir a la página de inicio</p>
        <Link to='/jade-vans' >Volver</Link>
    </div>
  );
};

export default NotFoundPage;