"use client"
import React, { useState }from 'react'

import DataTable from '@/common/DataTable';
import { useSidebar } from '@/hooks/useSidebar';
import TableActions from '@/common/TableActions';
import PageHeader from '@/common/PageHeader';
import Modal from '@/common/Modal';
const page = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  const [search, setSearch] = useState('')
  const {isActive} = useSidebar()
  const linkTitle = "Nova recorrente";
  const heading = "Gastos recorrentes"
  return (
    <>
    <div className={`  justify-center ${isActive === false ? "px-0" : "pl-[270px] pt-2"}`}>
      <div className="px-5">
        <div className="py-4">
          <PageHeader linkTitle={linkTitle} heading={heading} isOpen={isOpen} setIsOpen={setIsOpen}/>
          <TableActions title="Gastos recorrentes" setSearch={setSearch} search={search}/>        
        </div>
        <DataTable setSearch={setSearch} search={search} />
      </div>    
    </div>
    { isOpen && (<Modal isOpen={isOpen} setIsOpen={setIsOpen}/>)}
    </>
  )
}

export default page