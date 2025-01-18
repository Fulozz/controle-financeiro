"use client"

import React from 'react';
import { useProtectedRoute } from '@/hooks/useAuth';
import useUser from '@/hooks/useUser'
import DashboardCard from '@/components/dashboard/DashboardCard';
import moment from 'moment';
import BottomMenu from '@/components/cadastro/BottomMenu';
import SidebarController from '@/components/sidebar/controller/SidebarController';
import { useSidebar } from '@/hooks/useSidebar';
import DashboardTables from '@/components/dashboard/DashboardTables';

const page = () => {
  moment.updateLocale('pt-br', {
    months: [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ]
  });
    const dataAtual = new Date();
    const mesPorExtenso = moment(dataAtual).format('MMMM');
    const user = useUser();

    const { isActive, setIsActive} = useSidebar()
    const { isLoading, isAuthenticated } = useProtectedRoute();


    if(isLoading | !user) {
      return (
        <div className='loading h-full w-full bg-black'>Carregando...</div>
      )
    }
    if(!isAuthenticated) {
      // Redirecionamento já é realizado no hook
      return null;
    }
console.log(user)
return (
    <div className={`block   ${isActive === false ? "px-0" : "pl-[270px] pt-2"}`} >
      <div className="max-w-2xl md:max-w-none mx-auto pt-2">
        <DashboardCard user={user} mes={mesPorExtenso}  />
      </div>

      <div className="max-w-2xl md:max-w-none mx-auto pt-2">
        <DashboardTables user={user} mesRef={mesPorExtenso} />
      </div>
      {/* TODO: GASTOS RECENTES E OVERVIEW DOS MESES https://ui.shadcn.com/examples/dashboard */}
      <div className="flex  dark:bg-[#18181A] justify-center items-center z-40 fixed right-6 bottom-6 h-[50px] w-[50px] rounded-lg  border border-gray-400 shadow-lg">
        <BottomMenu user={user}/>
      </div>
    </div>
  );
}

export default page