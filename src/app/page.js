"use client"

import useUser from '@/hooks/useUser'
import React from 'react'

export default function Home() {

  
  return (
    <div>
      <div className="">
      <h1>Olá,!</h1>
      <p>Seja bem-vindo(a)</p>
      <a href="/login">Login</a>
      {/* Exibir outras informações do usuário */}
    </div>
    </div>
  );
}
