import React from 'react'
import GastosTable from './tables/GastosTable'

const DashboardTables = () => {
  return (
    <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
        <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            <div className="aspect-video rounded-xl bg-white shadow-lg dark:bg-[#18181A] flex flex-col items-center justify-center">
                <GastosTable />
            </div>

            <GastosTable />
        </div>
    </div>
  )
}

export default DashboardTables