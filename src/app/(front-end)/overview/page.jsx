"use client"
 
import React, { useState } from 'react';
import { useProtectedRoute } from '@/hooks/useAuth';
import useUser from '@/hooks/useUser'
import DashboardCard from '@/components/dashboard/DashboardCard';
import moment from 'moment';
import BottomMenu from '@/components/cadastro/BottomMenu';
import { useSidebar } from '@/hooks/useSidebar';
import DashboardTables from '@/components/dashboard/DashboardTables';
import useFinancial from '@/hooks/useFinancial';
import useFinancialMonth from '@/hooks/useFinancialMonth'

// TODO: arrumar um jeito de não recarregar a pagina toda vez q tem uma alteração
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

    const { isActive } = useSidebar()
    const [forceUpdate, setForceUpdate] = useState(false);

    const userID = user.id
    const mesRef = new Date().toISOString().slice(0, 7)
    console.log(mesRef)
    const { data: cardData, isLoading: externalIsLoading, error, forceUpdate: externalForceUpdate } = useFinancial(userID, mesRef, forceUpdate);
    const { data: tableData, isLoading: tableIsLoading, error: tableError, forceUpdate: tableForceUpdate } = useFinancialMonth(userID, mesRef, forceUpdate);

    const { isLoading, isAuthenticated } = useProtectedRoute();


    if(isLoading | !user) {
      return (
        <div className='loading h-auto w-full '>Carregando...</div>
      )
    }
    if(!isAuthenticated) {
      // Redirecionamento já é realizado no hook
      return null;
    }
return (
    <div className={`block  pl-0 md:pl-[270px]`} >
      <div className="max-w-2xl md:max-w-none mx-auto pt-2">
        <DashboardCard user={user} mes={mesPorExtenso} data={cardData} mesRef={mesRef} isLoading={externalIsLoading} error={error} />
      </div>

      <div className="max-w-2xl md:max-w-none mx-auto pt-2">
        <DashboardTables user={user} mesRef={mesPorExtenso} data={tableData} isLoading={tableIsLoading} error={tableError} />
      </div>
      {/* TODO: GASTOS RECENTES E OVERVIEW DOS MESES https://ui.shadcn.com/examples/dashboard */}
      <div className="flex  dark:bg-[#18181A] justify-center items-center z-40 fixed right-6 bottom-[90px] h-[50px] w-[50px] rounded-lg  border border-gray-400 shadow-lg">
        <BottomMenu user={user} forceUpdate={forceUpdate} setForceUpdate={setForceUpdate}/>
      </div>
    </div>
  );
}

export default page