import React from 'react'
import { LayoutDashboard } from 'lucide-react'

const BottomBar = () => {
  return (
    <div className="fixed  bottom-0 left-0 right-0  md:hidden justify-space  items-center h-24 w-full bg-black border-t-[1px]">

        <div className="flex justify-center items-center">
          <div className="p-4">
          <LayoutDashboard className="h-[40px] w-[40px]" />
          </div>
          <div className="p-4">
          <LayoutDashboard className="h-[40px] w-[40px]" />
          </div>
          <div className="p-4">
          <LayoutDashboard className="h-[40px] w-[40px]" />
          </div>
        </div>


    </div>
  )
}

export default BottomBar