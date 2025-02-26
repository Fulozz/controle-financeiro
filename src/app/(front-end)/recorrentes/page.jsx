"use client"
import React, { useState }from 'react'

import DataTable from '@/common/DataTable';
import TableActions from '@/common/TableActions';
import PageHeader from '@/common/PageHeader';
import ModalRecorrentes from '@/components/Modal/ModalRecorrentes';
import useRecurring from '@/hooks/useRecurring';
import useUser from '@/hooks/useUser';
const page = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [search, setSearch] = useState('');

  const user = useUser();
  const userID = user.id;

  const { data, isLoading, error} = useRecurring(userID);

  const linkTitle = "Conta recorrente";
  const heading = "Contas recorrentes"
  return (
    <>
    <div className={`  justify-center pl-0 md:pl-[270px]`}>
      <div className="">
        <div className="py-4">
          <PageHeader linkTitle={linkTitle} heading={heading} isOpen={isOpen} setIsOpen={setIsOpen}/>
          <TableActions title="Contas recorrentes" setSearch={setSearch} search={search}/>        
        </div>
        <DataTable setSearch={setSearch} search={search} data={data} />
      </div>    
    </div>
    { isOpen && (<ModalRecorrentes isOpen={isOpen} setIsOpen={setIsOpen}  url={"/api/v1/transaction/register/recurring"}/>)}
    </>
  )
}

export default page