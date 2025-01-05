import useFinancial from '@/hooks/useFinancial';
import React from 'react';
import moment from 'moment/moment';

const DashboardCard = ({ user, mes }) => {
  const userID = user.id
  const mesRef = new Date().toISOString().slice(0, 7)
  
 
  const { data, isLoading, error } = useFinancial(userID, mesRef);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro ao carregar dados: {error.message}</div>;
  }

  if (!data) {
    return <div>Nenhum dado encontrado.</div>;
  }
 console.log(data.dados)
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-1 border-2 p-4 rounded-md bg-white shadow-md">
        <p className='font-medium'>Total recebido - <span className='font-bold'>{mes}</span> </p>
        <h2 className='text-3xl text-blue-500 font-bold'>{totalRecebido ? (formatValue(totalRecebido)): ('R$00,00')}</h2>
      </div>
      <div className="col-span-1 border-2 p-4 rounded-md bg-white shadow-md">
        <p className='font-medium'>Total pago - <span className='font-bold'>{mes}</span> </p>
        <h2 className='text-3xl text-red-500 font-bold'>-{totalPago ? (formatValue(totalPago)): ('R$00,00')}</h2>
      </div>
      <div className="col-span-1 border-2 p-4 rounded-md bg-white shadow-md">
        <p className='font-medium'>Saldo atual </p>
        <h2 className='text-3xl text-blue-500 font-bold'>{saldo ? (formatValue(saldo)) : ('R$00,00')}</h2>
      </div>

    </div>
  )
};

export default DashboardCard;