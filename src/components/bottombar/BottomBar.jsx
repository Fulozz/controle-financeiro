import React from 'react'
import { LayoutDashboard, House, Repeat2,User } from 'lucide-react'

const BottomBar = () => {
  return (
    <div className="fixed  z-[99] bottom-0 left-0 right-0  md:hidden justify-space  items-center h-18 ew-full bg-black border-t-[1px]">

        <div className="flex justify-center items-center">
          <a href="/recorrentes" className="p-4">
          <Repeat2 className="h-[40px] w-[40px]" />
          </a>
          <a href="/overview" className="p-4">
          <House className="h-[40px] w-[40px]" />
          </a>
          <a href="/perfil" className="p-4">
          <User className="h-[40px] w-[40px]" />
          </a>
        </div>


    </div>
  )
}

export default BottomBar