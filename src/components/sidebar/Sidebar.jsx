"use client"
import React, { useState } from 'react'
import logo  from '@/components/assets/logo.png'
import Image from 'next/image'
import { Wallet, ChevronsUpDown, ChevronUp, SquareTerminal, Settings, DollarSign } from 'lucide-react'
import ThemeSwitcher from '@/components/theme/ThemeSwitcher'
import { isUserLoggedIn } from '@/hooks/useAuth';
import { useSidebar } from '@/hooks/useSidebar'

const Sidebar = () => {
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);
    const [isFinanceiroOpen, setIsFinanceiroOpen] = useState(false);
    const [isConfigurationOpen, setIsConfigurationOpen] = useState(false);
    const [isOpenPago, setIsOpenPago] = useState(false);
    const [isOpenRecebido, setIsOpenRecebido] = useState(false);
    const  isAuthenticated  = isUserLoggedIn()
    const { isActive, setIsActive} = useSidebar()


  return (
    <>  

        {
            isAuthenticated && (
                <div className="hidden md:block -translate-x-full ">
                    <nav className={`fixed inset-y-0 left-0  bg-[#FAFAFA] dark:bg-[#18181B] ${isActive ? 'w-64 translate-x-0 transition-all duration-300 ease-in-out' : '-translate-x-full transition-all duration-300 ease-in-out'}`}>
                    <div className="flex text-white items-center justify-start p-4 hover:bg-[#F4F4F5] dark:hover:bg-[#27272A] rounded-lg gap-2 ">
                        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-400">
                            <Wallet className="h-[24px] w-[24px]" />
                        </div>
                        <div className={`grid flex-1 text-left text-sm leading-tight ${isActive === false ? 'hidden' : ''}`}>
                            <span className='font-semibold text-black dark:text-white'>Fulo Inc</span>
                            <span className='text-xs text-black dark:text-white'>Entrerprise</span>
                        </div>
                        <ChevronsUpDown className={`h-[16px] w-[16px] text-black dark:text-white ${isActive === false ? 'hidden' : ''}`} />
                    </div>
                    <div className="group relative inline-block">
                        
                    </div>
                <div className="relative flex w-full min-w-0 flex-col p-2">
                    <div className="duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-none ease-linear text-[#F4F4F5B2] text-black dark:text-white">Principal</div>
                    <ul className="flex w-full min-w-0 flex-col gap-1">
                        <li className="flex pl-1 ">
                        <button 
                            className="group/item flex text-[#F4F4F5] overflow-hidden outline-none rounded-md cursor-pointer justify-between items-center w-full pr-6 py-2 text-sm font-medium hover:bg-[#F3F3F5] dark:hover:bg-[#27272A]" 
                            onClick={() => setIsDashboardOpen(!isDashboardOpen)} 
                        >
                            <div className='flex gap-2 ml-2'>
                            <SquareTerminal className='h-5 w-5 text-black dark:text-white' />
                            <span className="text-black dark:text-white">Dashboard</span>
                            </div>
                            <ChevronUp className={`h-4 w-4 text-black dark:text-white ${isDashboardOpen ? 'rotate-180' : ''}`} />
                        </button>
                        </li>
                        <div className="border-l-[1px] border-black dark:border-white ml-5 pl-1">
                            <a href="/overview" className={`pl-1 ${isDashboardOpen ? '' : 'hidden'}`}>
                            Overview
                            </a>
                            <li className={`pl-1  ${isDashboardOpen ? '' : 'hidden'}`}>
                            Relatórios
                            </li>
                        </div>
                    </ul>
                    <ul className="flex w-full min-w-0 flex-col gap-1">
                        <li className="flex pl-1 ">
                        <button 
                            className="flex text-[#F4F4F5] overflow-hidden outline-none rounded-md justify-between items-center w-full pr-6 py-2 text-sm font-medium" 
                            onClick={() => setIsFinanceiroOpen(!isFinanceiroOpen)} 
                        >
                            <div className='flex gap-2 ml-2'>
                            <DollarSign className='h-5 w-5 text-black dark:text-white' />
                            <span className="text-black dark:text-white">Financeiro</span>
                            </div>
                            <ChevronUp className={`h-4 w-4 text-black dark:text-white ${isFinanceiroOpen ? 'rotate-180' : ''}`} />
                        </button>
                        </li>
                        
                        <div className="ml-5 border-l-[1px] border-black dark:border-white ">
                            <li className={`pl-1 cursor-pointer flex items-center ${isFinanceiroOpen ? '' : 'hidden'}`}>
                                <a href="/recorrentes">Recorrentes</a>
                            </li>
                        </div>
                    </ul>
                    </div>
                </nav>  
                </div>
            )
        }
    </>
  )
}

export default Sidebar