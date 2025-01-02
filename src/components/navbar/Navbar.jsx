"use client"
import Image from 'next/image'
import React from 'react'
import logo  from '@/components/assets/logo.png'
import DropdownMenu from '@/common/DropdownMenu'
import useUser from '@/hooks/useUser'


const Navbar = () => {

    const user = useUser();

    const navItems = [
        { href: "/dashboard", name: "Dashboard"},
        { href: "/cadastros", name: "Cadastros"},
        { href: "/financeiro", name: "Financeiro"},
        { href: "/boletos", name: "Boletos"},
        { href: "/relatorios", name: "Relatorios"},
    ]

  return (
    <nav className="flex justify-between items-center py-[50px] px-[50px] md:px[150px] h-16 relative shadow-sm font-mono" role="navigation">
        <div className="flex">
            <Image src={logo} alt="logo" width={50} height={50} />
            {
                user && (
                    <>
                    {
                            navItems.map((item, index) => {
                                return (
                                    <a href={item.href} key={index} className="p-4">{item.name}</a>
                                )
                            })
                        }
                    </>
                )
            }
        </div>
        <div>
            <DropdownMenu user={user}/>
        </div>
    </nav>
  )
}

export default Navbar