"use client"


import React from 'react';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';

const page = () => {


return (
    <div className="">
      <h1>Olá, bem-vindo ao dashboard!</h1>
      <p>Você pode visualizar e atualizar suas informações no seu perfil</p>
      {/* Exibir outras informações do usuário */}
    </div>
  );
}

export default page