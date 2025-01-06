"use client"
import React from 'react';
import DropdownMenuCadastro from './DropdownMenuCadastro';

const DropdownMenu = ({ user }) => {
  const signout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };
  const username = user.name.split(' ')[0]


  return (
    <div className="group relative inline-block">
      {user && user.name ? (
        <>
          <button className=" cursor-pointer border border-gray-400 rounded-lg text-base p-3">{username}</button>
          <div className="bg-white shadow-lg right-0 hidden group-hover:block absolute rounded-lg min-w-[200px] z-10 border border-gray-400" 
          >
            <a href="/perfil" className='p-4 block hover:bg-[#f1f1f1]'>Perfil</a>
            <div className="block  md:hidden">
              <a href="/dashboard" className='p-4 block hover:bg-[#f1f1f1]'>Dashboard</a>
              <a href="/financeiro" className='p-4 block hover:bg-[#f1f1f1]'>Financeiro</a>
              <a href="/boletos" className='p-4 block hover:bg-[#f1f1f1]'>Boletos</a>
              <a href="/relatorios" className="p-4 block">Relatorios</a>
            </div>
            <a href="/configuracao" className='p-4 block hover:bg-[#f1f1f1]'>Configurações</a>
            <a href="/login" onClick={signout} className='p-4 block hover:bg-[#f1f1f1]'>Sair</a>
          </div>
        </>
      ) : (
        <a href="/login" className="text-blue-500">Login</a>
      )}
    </div>
  );
};

export default DropdownMenu;