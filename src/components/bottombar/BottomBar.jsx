"use client"
import React, { useEffect, useState } from 'react';
import { LoaderCircle, House, Repeat2, User } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const BottomBar = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      setShouldRender(true);
    }
  }, [isAuthenticated]);

  if(!isAuthenticated){
    return <div className="fixed z-[99] bottom-0 left-0 right-0 md:hidden justify-space items-center h-18 w-full bg-black border-t-[1px]">
              <div className="flex justify-center items-center">
                <div href="/recorrentes" className="p-4">
                  <LoaderCircle className="h-[40px] w-[40px] animate-spin" />
                </div>
              </div>
            </div>
  }

  return (
    <div className="fixed z-[99] bottom-0 left-0 right-0 md:hidden justify-space items-center h-18 w-full bg-black border-t-[1px]">
      <div className="flex justify-center items-center">
        <a href="/recorrentes" className="p-4">
          <Repeat2 className="h-[40px] w-[40px]" />
        </a>
        <a href="/dashboard" className="p-4">
          <House className="h-[40px] w-[40px]" />
        </a>
        <a href="/perfil" className="p-4">
          <User className="h-[40px] w-[40px]" />
        </a>
      </div>
    </div>
  );
};

export default BottomBar;