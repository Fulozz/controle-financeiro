import useFinancial from '@/hooks/useFinancial';
import React from 'react';

const DashboardCard = ({ mesRef, data, isLoading, error}) => {

 
  const mes = mesRef


  if (isLoading) {
    return <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              <h1 className='text-[1.8rem] font-bold text-slate-700 dark:text-slate-300'>Visão Geral das Contas</h1>
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-white shadow-lg dark:bg-[#18181A] flex flex-col items-center justify-center">
                  <p className='text-base md:text-[1.4rem] '>Total recebido - <span className='font-bold'>{mes}</span> </p>
                  <h2 className='text-[2.2rem] text-blue-500 font-bold'>...Carregando</h2>
                </div>
                <div className="aspect-video rounded-xl bg-white shadow-lg dark:bg-[#18181A] flex flex-col items-center justify-center">
                  <p className='text-base md:text-[1.4rem] '>Total pago - <span className='font-bold'>{mes}</span> </p>
                  <h2 className='text-[2.2rem] text-red-500 font-bold'>...Carregando</h2>
                </div>
                <div className="aspect-video rounded-xl bg-white shadow-lg dark:bg-[#18181A] flex flex-col items-center justify-center">
                  <p className='text-base md:text-[1.4rem] '>Saldo</p>
                  <h2 className='text-[2.2rem] text-green-500 font-bold'>...Carregando</h2>
                </div>
              </div>
            </div>;
  }

  if (error) {
    return <div>Erro ao carregar dados: {error.message}</div>;
  }

  if (!data) {
    return <div>Nenhum dado encontrado.</div>;
  }
  const totalRecebido = data.dados.totalRecebido;
  const totalPago = data.dados.totalPago
  const saldo = data.dados.saldo;
 
  // Função para formatar valores monetários
  const formatValue = (value) => {
    if (value === 0) {
      return 'R$ 0,00';
    }
    const formattedValue = value.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    return `R$ ${formattedValue}`;
  };




  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <h1 className='text-[1.8rem] font-bold text-slate-700 dark:text-slate-300'>Visão Geral das Contas</h1>
      <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="h-[210px] w-full rounded-xl bg-white shadow-lg dark:bg-[#18181A] flex flex-col items-center justify-center">
          <p className='text-base md:text-[1.4rem] '>Total recebido - <span className='font-bold'>{mes}</span> </p>
          <h2 className='text-[2.2rem] text-blue-500 font-bold'>{totalRecebido ? (formatValue(totalRecebido)): ('R$00,00')}</h2>
        </div>
        <div className="h-[210px] w-full rounded-xl bg-white shadow-lg dark:bg-[#18181A] flex flex-col items-center justify-center">
          <p className='text-base md:text-[1.4rem] '>Total pago - <span className='font-bold'>{mes}</span> </p>
          <h2 className='text-[2.2rem] text-red-500 font-bold'>-{totalPago ? (formatValue(totalPago)): ('R$00,00')}</h2>
        </div>
        <div className="h-[210px] w-full rounded-xl bg-white shadow-lg dark:bg-[#18181A] flex flex-col items-center justify-center">
          <p className='text-base md:text-[1.4rem] '>Saldo</p>
          <h2 className='text-[2.2rem] text-green-500 font-bold'>{saldo ? (formatValue(saldo)): ('R$00,00')}</h2>
        </div>
      </div>
    </div>
  )
};

export default DashboardCard;