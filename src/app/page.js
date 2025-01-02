"use client"

import useUser from '@/hooks/useUser'
import React from 'react'

export default function Home() {

  const user = useUser();
  console.log(user,"dashboard")
  if (!user) {
      return null;
  }

  return (
    <div>
      <div className="">
      <h1>Olá, {user.name}!</h1>
      <p>Seu e-mail é: {user.email}</p>
      {/* Exibir outras informações do usuário */}
    </div>
    </div>
  );
}
