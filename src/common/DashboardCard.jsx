import React from 'react';

const DashboardCard = ({ data }) => {
  const { mesRef, recebido, pago, saldo } = data[0];

  // Função para formatar valores monetários
  const formatValue = (value) => {
    const formattedValue = value.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    return `R$ ${formattedValue}`;
  };



  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-1 border-2 p-4 rounded-md bg-white shadow-md">
        <p className='font-medium'>Total recebido - <span className='font-bold'>{mesRef}</span> </p>
        <h2 className='text-3xl text-blue-500 font-bold'>{formatValue(recebido)}</h2>
      </div>
      <div className="col-span-1 border-2 p-4 rounded-md bg-white shadow-md">
        <p className='font-medium'>Total pago - <span className='font-bold'>{mesRef}</span> </p>
        <h2 className='text-3xl text-red-500 font-bold'>-{formatValue(pago)}</h2>
      </div>
      <div className="col-span-1 border-2 p-4 rounded-md bg-white shadow-md">
        <p className='font-medium'>Total recebido - <span className='font-bold'>{mesRef}</span> </p>
        <h2 className='text-3xl text-blue-500 font-bold'>{formatValue(saldo)}</h2>
      </div>

    </div>
  )
};

export default DashboardCard;