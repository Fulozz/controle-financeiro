"use client"
import React from 'react'
import SidebarController from '@/components/sidebar/controller/SidebarController';
const page = () => {
  const isActive = true
  return (
    <div className={`block   ${isActive === false ? "px-0" : "pl-[270px] pt-2"}`}>
      teste
    </div>
  )
}

export default page