"use client"
import React, { useState } from 'react'

const DropdownMenuCadastro = () => {
    const [isOpenRecebido, setIsOpenRecebido] = useState(false)
    const [isOpenPago, setIsOpenPago] = useState(false)
  return (
    <div className="group relative inline-block">
      {user && user.name && (
        <>
          <button className=" cursor-pointer border border-gray-400 rounded-lg text-base p-3">Cadastro</button>
          <div className="bg-white shadow-lg right-0 hidden group-hover:block absolute rounded-lg min-w-[200px] z-10 border border-gray-400" 
          >
            <div onClick={()=> setIsOpenRecebido(true)}  className='p-4 block hover:bg-[#f1f1f1]'>Recebido</div>
            <div onClick={()=> setIsOpenRecebido(true)}  className='p-4 block hover:bg-[#f1f1f1]'>Recebido</div>
            <div className="block  md:hidden">
              <div href="/dashboard" className='p-4 block hover:bg-[#f1f1f1]'>Dashboard</div>
              <a href="/cadastro" className='p-4 block hover:bg-[#f1f1f1]'>Cadastros</a>
              <a href="/financeiro" className='p-4 block hover:bg-[#f1f1f1]'>Financeiro</a>
              <a href="/boletos" className='p-4 block hover:bg-[#f1f1f1]'>Boletos</a>
              <a href="/relatorios" className="p-4 block">Relatorios</a>
            </div>

          </div>
        </>
      ) }
    </div>
  )
}

export default DropdownMenuCadastro