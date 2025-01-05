"use client"
import React, { useState } from 'react'
import ModalCadastroPago from '../cadastro/ModalCadastro.Pago'
import ModalCadastroRecebido from '../cadastro/ModalCadastro.Recebido'
const DropdownMenuCadastro = ({ user }) => {
    const [isOpenRecebido, setIsOpenRecebido] = useState(false)
    const [isOpenPago, setIsOpenPago] = useState(false)
  return (
    <div className="group relative inline-block">
      {user && user.name && (
        <>
          <button className=" cursor-pointer p-4 text-base">Cadastro</button>
          <div className="hidden  bg-white shadow-lg right-0 group-hover:block absolute rounded-lg min-w-[200px] z-10 border border-gray-400">
              <div onClick={()=> setIsOpenRecebido(true)}  className='p-4 block hover:bg-[#f1f1f1] cursor-pointer'>Recebido</div>
              <div onClick={()=> setIsOpenPago(true)}  className='p-4 block hover:bg-[#f1f1f1] cursor-pointer'>Pago</div>
            <div className="block  md:hidden">
              <div onClick={()=> setIsOpenRecebido(true)}  className='p-4 block hover:bg-[#f1f1f1] cursor-pointer'>Recebido</div>
              <div onClick={()=> setIsOpenPago(true)}  className='p-4 block hover:bg-[#f1f1f1] cursor-pointer'>Pago</div>
            </div>

          </div>
        </>
      ) }
      {
        isOpenRecebido === true ? (
          <ModalCadastroRecebido isOpen={isOpenRecebido} setIsOpen={setIsOpenRecebido}  />
        ) : null
      }
      {
        isOpenPago === true ? (
          <ModalCadastroPago isOpen={isOpenPago} setIsOpen={setIsOpenPago} />
        ) : null
      }
    </div>
  )
}

export default DropdownMenuCadastro