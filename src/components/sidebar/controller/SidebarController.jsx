import React from 'react';
import {PanelRightClose} from "lucide-react";
import { isUserLoggedIn } from '@/hooks/useAuth';

const SidebarController = ({ title }) => {
  const isAuthenticated = isUserLoggedIn() 

  return (
    <>
      {
        isAuthenticated && (
          <div className='h-full flex items-center p-4'>
            <PanelRightClose className="h-5 w-5"/>
            <h1 className='text-[1.8rem] font-semibold '>{title}</h1>
          </div>
        )
      }
    </>
  )
}

export default SidebarController