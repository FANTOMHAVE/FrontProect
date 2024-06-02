import React from 'react';
import { Outlet } from 'react-router-dom';

const Uslugi = () => {
  return (
    <div>
      <h1>Uslugi</h1>
      <Outlet />
    </div>
  );
}

export { Uslugi };
