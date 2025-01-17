import React from 'react'
import GastosTable from './tables/GastosTable'
import AgendadoTable from './tables/AgendadoTable';
const DashboardTables = () => {
  return (
    <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
        <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            <AgendadoTable />
            <GastosTable />
        </div>
    </div>
  )
}

export default DashboardTables