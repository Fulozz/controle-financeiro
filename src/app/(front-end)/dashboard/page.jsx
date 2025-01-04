"use client"


import React from 'react';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useProtectedRoute } from '@/hooks/useAuth';

const page = () => {
    const { isLoading, isAuthenticated } = useProtectedRoute();

    if(isLoading) {
      return (
        <div>Carregando...</div>
      )
    }
    if(!isAuthenticated) {
      // Redirecionamento já é realizado no hook
      return null;
    }

return (
    <div className="">
      <h1>Olá, bem-vindo ao dashboard!</h1>
      <p>Você pode visualizar e atualizar suas informações no seu perfil</p>
      {/* Exibir outras informações do usuário */}
    </div>
  );
}

export default page