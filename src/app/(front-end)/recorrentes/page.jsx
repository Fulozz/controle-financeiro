"use client"
import React from 'react'

import DataTable from '@/common/DataTable';
import { useSidebar } from '@/hooks/useSidebar';
const page = () => {
  const {isActive} = useSidebar()
  return (
    <div className={`  justify-center ${isActive === false ? "px-0" : "pl-[270px] pt-2"}`}>
      <div className="px-5">
        <DataTable />
      </div>    
    </div>
  )
}

export default page