"use client"
import { Plus } from 'lucide-react'
import React, { useState } from 'react'

const BottomMenu = ({ user }) => {
  const [isOpenRecebido, setIsOpenRecebido] = useState(false)
  const [isOpenPago, setIsOpenPago] = useState(false)
  return (
    <div className='group relative inline-block justify-center items-center'>
      {
        user && user.name && (
          <>
          <button className='cursor-pointer p-4 text-base'><Plus className='h-[30px] w-[40px]'/></button>
          <div className=""></div>
          </>
        )
      }
    </div>
  )
}

export default BottomMenu