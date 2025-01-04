"use client"

import React from 'react';
import { useProtectedRoute } from '@/hooks/useAuth';
import useUser from '@/hooks/useUser'
import DashboardCard from '@/common/DashboardCard';

const page = () => {
  const user = {
    name: "Thiago",
    email: "thiago.sandrade0720@gmail.com",
    mesRef: "dezembro"
  }
  const data = [
    {
      mesRef: "dezembro",
      recebido: 21500,
      pago: 31758.84,
      saldo: 10946.27
    }
  ]
    // const { isLoading, isAuthenticated } = useProtectedRoute();
    // const user = useUser();
    // if(isLoading | !user) {
    //   return (
    //     <div className='loading'>Carregando...</div>
    //   )
    // }
    // if(!isAuthenticated) {
    //   // Redirecionamento já é realizado no hook
    //   return null;
    // }

return (
    <div className="pt-3">
      <h1 className='text-[1.8rem] font-semibold '>Visão Geral das Contas</h1>
      <h4>Mês de referencia • {data[0].mesRef} </h4>

      <div className="max-w-2xl md:max-w-none mx-auto pt-2">
        <DashboardCard data={data} />
      </div>


     {/* TODO: GASTOS RECENTES E OVERVIEW DOS MESES https://ui.shadcn.com/examples/dashboard */}
    </div>
  );
}

export default page