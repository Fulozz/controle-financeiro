"use client"
import React from 'react';

const DropdownMenu = ({ user }) => {
 


  return (
    <div className="dropdown">
      {user && user.name ? (
        <>
          <button className="dropbtn">{user.name}</button>
          <div className="dropdown-content">
            <a href="/perfil">Perfil</a>
            <a href="/configuracao">Configurações</a>
            <a href="/login" onClick={null}>Sair</a>
          </div>
        </>
      ) : (
        <a href="/login" className="text-blue-500">Login</a>
      )}
    </div>
  );
};

export default DropdownMenu;