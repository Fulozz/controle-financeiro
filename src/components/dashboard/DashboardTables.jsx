import React from 'react'
import MovimentacoesRecentes from './tables/MovimentacoesRecentes'
import AgendadoTable from './tables/AgendadoTable';
const DashboardTables = ({ user, data, isLoading, error}) => {
  return (
    <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
        <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            <AgendadoTable />
            <MovimentacoesRecentes user={user} data={data} isLoading={isLoading} error={error}/>
        </div>
    </div>
  )
}

export default DashboardTables