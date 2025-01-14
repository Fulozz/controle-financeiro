import React, { useState } from 'react';

const GastosTable = () => {

  const gastos =[
    { id: 1, data: '2023-01-01', descricao: 'Compra de supermercado', valor: 'R$ 150,00' },
    { id: 2, data: '2023-01-02', descricao: 'Gasolina', valor: 'R$ 200,00' },
    { id: 3, data: '2023-01-03', descricao: 'Aluguel', valor: 'R$ 1.200,00' },
    { id: 4, data: '2023-01-04', descricao: 'Conta de luz', valor: 'R$ 100,00' },
    { id: 5, data: '2023-01-05', descricao: 'Conta de água', valor: 'R$ 80,00' },
    { id: 6, data: '2023-01-06', descricao: 'Internet', valor: 'R$ 120,00' },
    { id: 7, data: '2023-01-07', descricao: 'Academia', valor: 'R$ 90,00' },
    { id: 8, data: '2023-01-08', descricao: 'Restaurante', valor: 'R$ 250,00' },
    { id: 9, data: '2023-01-09', descricao: 'Cinema', valor: 'R$ 50,00' },
    { id: 10, data: '2023-01-10', descricao: 'Farmácia', valor: 'R$ 30,00' }
  ]
  const limit = 5;

  return (
    <div className="overflow-x-auto max-h-96">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50  text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Data
            </th>
            <th className="px-6 py-3 bg-gray-50  text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Descrição
            </th>
            <th className="px-6 py-3 bg-gray-50  text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Valor
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y dark:bg-black dark:divide-gray-700">
          {gastos.slice(0, limit).map((gasto) => (
            <tr key={gasto.id}>
              <td className="px-6 py-4 whitespace-nowrap">{gasto.data}</td>
              <td className="px-6 py-4 whitespace-nowrap">{gasto.descricao}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right font-medium text-gray-900 dark:text-gray-200">{gasto.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {gastos.length > limit && (
        <div className="text-center py-2 text-gray-500 dark:text-gray-400">
          Exibindo {limit} de {gastos.length} itens
        </div>
      )}
    </div>
  );
};

export default GastosTable;