import React from 'react';
import {PanelRightClose} from "lucide-react";

const Navbar = () => {
    title = "Visão Geral das Contas"
  return (
    <div className='h-full'>
      <PanelRightClose className=""/>
      <h1 className='text-[1.8rem] font-semibold '>{title}</h1>
    </div>
  )
}

export default Navbar