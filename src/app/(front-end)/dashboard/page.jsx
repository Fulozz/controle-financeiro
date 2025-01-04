"use client"

import React from 'react';
import { useProtectedRoute } from '@/hooks/useAuth';
import useUser from '@/hooks/useUser'


const page = () => {
    const { isLoading, isAuthenticated } = useProtectedRoute();
    const user = useUser();
  console.log(user)
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
      <h1>Olá, bem-vindo ao dashboard! <br />
        {user && user.name}
      </h1>
      <p>Você pode visualizar e atualizar suas informações no seu perfil</p>
      {/* Exibir outras informações do usuário */}
    </div>
  );
}

export default page