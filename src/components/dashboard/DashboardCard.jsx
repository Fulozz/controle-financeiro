import useFinancial from '@/hooks/useFinancial';
import React from 'react';

const DashboardCard = ({ user }) => {
  const userID = user.id
  const mesRef = 'janeiro'
 
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

  const totalRecebido = data.result.totalRecebido;
  const totalPago = data.result.totalPago
  const saldo = totalRecebido - totalPago;
  console.log(data.result)
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
        <p className='font-medium'>Total recebido - <span className='font-bold'>{mesRef}</span> </p>
        <h2 className='text-3xl text-blue-500 font-bold'>{totalRecebido}</h2>
      </div>
      <div className="col-span-1 border-2 p-4 rounded-md bg-white shadow-md">
        <p className='font-medium'>Total pago - <span className='font-bold'>{mesRef}</span> </p>
        <h2 className='text-3xl text-red-500 font-bold'>-{totalPago}</h2>
      </div>
      <div className="col-span-1 border-2 p-4 rounded-md bg-white shadow-md">
        <p className='font-medium'>Saldo atual </p>
        <h2 className='text-3xl text-blue-500 font-bold'>{saldo}</h2>
      </div>

    </div>
  )
};

export default DashboardCard;