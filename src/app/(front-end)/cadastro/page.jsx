"use client"
import ModalCadastro from '@/components/cadastro/ModalCadastro'
import React, {useState} from 'react'

const page = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      
      <h1>cadastro</h1>
      <button onClick={()=> setIsOpen(true)}>Recebido</button>
      <ModalCadastro isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  )
}

export default page