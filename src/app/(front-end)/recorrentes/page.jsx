"use client"
import React from 'react'

import DataTable from '@/common/DataTable';
import { useSidebar } from '@/hooks/useSidebar';
import TableActions from '@/common/TableActions';
import PageHeader from '@/common/PageHeader';
import Modal from '@/common/Modal';
const page = () => {

  const {isActive} = useSidebar()
  const href = "/dashboard/categories/new";
  const linkTitle = "Nova Categoria";
  const heading = "Gastos recorrentes"
  return (
    <>
    <div className={`  justify-center ${isActive === false ? "px-0" : "pl-[270px] pt-2"}`}>
      <div className="px-5">
        <div className="py-4">
          <PageHeader href={href} linkTitle={linkTitle} heading={heading} />
          <TableActions title="Gastos recorrentes" />        
        </div>
        <DataTable />
      </div>    
    </div>
    <Modal />
    </>
  )
}

export default page