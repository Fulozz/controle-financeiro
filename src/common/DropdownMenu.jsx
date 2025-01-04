"use client"
import React from 'react';

const DropdownMenu = ({ user }) => {
  const signout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };


  return (
    <div className="dropdown">
      {user && user.name ? (
        <>
          <button className="dropbtn">{user.name}</button>
          <div className="dropdown-content">
            <a href="/perfil">Perfil</a>
            <div className="block md:hidden">
              <a href="/dashboard" className="p-4">Dashboard</a>
              <a href="/cadastros" className="p-4">Cadastros</a>
              <a href="/financeiro" className="p-4">Financeiro</a>
              <a href="/boletos" className="p-4">Boletos</a>
              <a href="/relatorios" className="p-4">Relatorios</a>
            </div>
            <a href="/configuracao">Configurações</a>
            <a href="/login" onClick={signout}>Sair</a>
          </div>
        </>
      ) : (
        <a href="/login" className="text-blue-500">Login</a>
      )}
    </div>
  );
};

export default DropdownMenu;