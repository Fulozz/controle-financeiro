"use client"
import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import ModalCadastroPago from '../cadastro/ModalCadastro.Pago'
import ModalCadastroRecebido from '../cadastro/ModalCadastro.Recebido'
const BottomMenu = ({ user }) => {
  const [isOpenRecebido, setIsOpenRecebido] = useState(false)
  const [isOpenPago, setIsOpenPago] = useState(false)
  return (
    <div className='group relative inline-block justify-center items-center'>
      {
        user && user.name && (
          <>
          <button className='cursor-pointer p-4 text-base'><Plus className='h-[30px] w-[40px]'/></button>
          <div className="bg-white shadow-lg bottom-[55px] right-[15px] hidden group-hover:block absolute rounded-lg min-w-[200px] z-10 border border-gray-400">
            <div onClick={()=> setIsOpenRecebido(true)} className='p-4 block hover:bg-[#f1f1f1] cursor-pointer'>Recebido</div>
            <div onClick={()=> setIsOpenPago(true)} className='p-4 block hover:bg-[#f1f1f1] cursor-pointer'>Pago</div>
          </div>
          </>
        )
      }
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

export default BottomMenu