"use client"

import React from 'react';
import { useProtectedRoute } from '@/hooks/useAuth';
import useUser from '@/hooks/useUser'
import DashboardCard from '@/components/dashboard/DashboardCard';
import moment from 'moment';
const page = () => {
  moment.locale('pt-br', {
    months: [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ]
  });
    const dataAtual = new Date();
    const mesPorExtenso = moment(dataAtual).format('MMMM');

    const { isLoading, isAuthenticated } = useProtectedRoute();
    const user = useUser();

    if(isLoading | !user) {
      return (
        <div className='loading'>Carregando...</div>
      )
    }
    if(!isAuthenticated) {
      // Redirecionamento já é realizado no hook
      return null;
    }
console.log(user)
return (
    <div className="pt-3">
      <h1 className='text-[1.8rem] font-semibold '>Visão Geral das Contas</h1>
      <h4>Mês de referencia • {mesPorExtenso} </h4>

      <div className="max-w-2xl md:max-w-none mx-auto pt-2">
        <DashboardCard user={user} mes={mesPorExtenso}  />
      </div>


     {/* TODO: GASTOS RECENTES E OVERVIEW DOS MESES https://ui.shadcn.com/examples/dashboard */}
    </div>
  );
}

export default page