"use client"
import Navbar from '@/components/navbar/Navbar';
import useUser from '@/hooks/useUser'
import React from 'react'


const page = () => {
    const user = useUser();
    console.log(user,"dashboard")
    if (!user) {
        return null;
    }

return (
    <div className="">
      <h1>Olá, {user.name}!</h1>
      <p>Seu e-mail é: {user.email}</p>
      {/* Exibir outras informações do usuário */}
    </div>
  );
}

export default page