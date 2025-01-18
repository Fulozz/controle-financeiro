import React from 'react';
import {PanelRightClose} from "lucide-react";
import { isUserLoggedIn } from '@/hooks/useAuth';
import  { useSidebar }  from '@/hooks/useSidebar';

const SidebarController = () => {
  const isAuthenticated = isUserLoggedIn() 
  const { isActive, setIsActive} = useSidebar()
  return (
    <>
      {
        isAuthenticated && (
          <div className={`h-full flex items-center p-4 ${isActive === false ? "px-0 pl-5" : "pl-[270px] pt-2"}`}>
            <div className="hover:bg-[#f1f1f1]  dark:hover:bg-[#27272A] mr-2 rounded-lg" onClick={()=> setIsActive(!isActive)}><PanelRightClose className="h-5 w-5 "/></div>
            <div className="bg-[#A1A1AA] w-[1px] shrink-0  mr-2 h-4"></div>
            <h1 className='text-md font-semibold text-[#A1A1AA] '>Fulozz inc</h1>
          </div>
        )
      }
    </>
  )
}

export default SidebarController