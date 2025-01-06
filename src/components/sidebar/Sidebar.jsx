import React from 'react'
import logo  from '@/components/assets/logo.png'
import Image from 'next/image'
import { Wallet, ChevronsUpDown, ChevronUp, SquareTerminal, Settings } from 'lucide-react'
import ThemeSwitcher from '@/components/theme/ThemeSwitcher'
const Sidebar = () => {
  return (
    <nav className="fixed inset-y-0 left-0 w-64 bg-[#18181B]">
        <div className="flex text-white items-center justify-start m-4 hover:bg-[#27272A] rounded-lg gap-2 p-2">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-400">
                <Wallet className="h-[24px] w-[24px]" />
            </div>
            <div className={`grid flex-1 text-left text-sm leading-tight`}>
                <span className='font-semibold'>Fulo Inc</span>
                <span className='text-xs'>Entrerprise</span>
            </div>
            <ChevronsUpDown className='h-[16px] w-[16px]' />
        </div>
        <div className="relative flex w-full min-w-0 flex-col p-2">
            <div className="duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-none ease-linear text-[#F4F4F5B2]">Principal</div>
            <ul className="flex w-full min-w-0 flex-col gap-1">
                <li className="flex  ml-5 pl-1 ">
                    <button className="group/item flex text-[#F4F4F5] overflow-hidden outline-none rounded-md justify-between items-center w-full pr-6 py-2 text-sm font-medium">
                        <div className='flex gap-2'>
                            <SquareTerminal />
                            <span>Dashboard</span>
                        </div>
                            <ChevronUp className="h-4 w-4" />
                    </button>
                </li>
                <li className="">
                    Overview
                </li>
                <li>
                    Financeiro
                </li>
                <li>
                    Relatórios
                </li>
            </ul>
            <ul className="flex w-full min-w-0 flex-col gap-1">
                <li className="flex  ml-5 pl-1 ">
                    <button className="flex text-[#F4F4F5] overflow-hidden outline-none rounded-md justify-between items-center w-full pr-6 py-2 text-sm font-medium">
                        <div className='flex gap-2'>
                        <Settings />
                            <span>Configuração</span>
                        </div>
                            <ChevronUp className="h-4 w-4" />
                    </button>
                </li>
            </ul>
        </div>
       
        <ThemeSwitcher />
    </nav>
  )
}

export default Sidebar