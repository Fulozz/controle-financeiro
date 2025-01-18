"use client"
import React from "react";
import {  Clock, Check, X, DollarSign } from "lucide-react";
import  useFinancialMonth  from '@/hooks/useFinancialMonth';
const MovimentacoesRecentes = ({user}) => {
  const userID = user.id
  const mesRef = new Date().toISOString().slice(0, 7)
  
  const { data: gastos, isLoading, error } = useFinancialMonth(userID, mesRef);
  console.log(gastos, 'useFinancialMonth')

  if (isLoading) {
    return <div>Carregando...</div>;
  }
    const limit = 10;
    // Sort gastos by date in descending order (most recent first)
    const sortedGastos = gastos.slice(0, limit).sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="overflow-w-auto border-white border-2 rounded-lg p-2">
      <table className="min-w-full divide-y divide-gray-700 dark:divide-gray-200">
        <caption className="">Movimentações recentes</caption>
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
              Data
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
              Categoria
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
              valor
            </th>
          </tr>
        </thead>
        <tbody>
          
          {sortedGastos.map((gasto) => (
            <tr key={gasto.id}>
              <td>{gasto.date}</td>
              {gasto.status === "pago" ? (
                <td className="flex  items-center">
                  <Check  className="h-5 w-5 mr-2 text-green-500 " />
                  {gasto.status}
                </td>
              ) : 
              gasto.status === "agendado" ? (
                <td className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-yellow-400" />
                  {gasto.status}
                </td>
              ) : gasto.status === "cancelado" ? (
                <td className="flex items-center">
                  <X className="h-5 w-5 mr-2 text-red-500" />
                  {gasto.status}
                </td>
              ) : gasto.status === "recebido" ? (
                <td className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-blue-500" />
                  {gasto.status}
                </td>
              ) : null
              }
              <td>{gasto.titulo}</td>
              { gasto.status === "recebido" ? (<td className="text-black dark:text-white">+{gasto.valor}</td>) : <td className="text-red-500">-{gasto.valor}</td>}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center pt-2 text-gray-500 dark:text-gray-400">
        Exibindo os ultimos {limit} itens
      </div>
    </div>
  );
};

export default MovimentacoesRecentes;
