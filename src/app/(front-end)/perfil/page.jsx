"use client"
import useUser from '@/hooks/useUser';
import React from 'react'

const page = () => {
  const user = {
    name:  "Thiago",
    email: "teste.email@gmail.com"
  }
  return (
    <div className="">
        <h1>Perfil</h1>
        <h2>Nome: {user.name}</h2>
        <h2>Email: {user.email}</h2>
    </div>
  )
}

export default page