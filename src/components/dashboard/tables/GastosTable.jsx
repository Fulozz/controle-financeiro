"use client"
import React from "react";
import {  Clock, Check, X } from "lucide-react";
import  useFinancialMonth  from '@/hooks/useFinancialMonth';
const GastosTable = ({user}) => {
  const userID = user.id
  const mesRef = new Date().toISOString().slice(0, 7)
  
  const { data: gastos, isLoading, error } = useFinancialMonth(userID, mesRef);
  console.log(gastos, 'useFinancialMonth')

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro ao carregar dados: {error.message}</div>;
  }


  const limit = 10;

  return (
    <div className="overflow-w-auto border-white border-2 rounded-lg p-2">
      <table className="min-w-full divide-y divide-gray-700 dark:divide-gray-200">
        <caption className="">Gastos recentes</caption>
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
          {gastos.map((gasto) => (
            <tr key={gasto.id}>
              <td>{gasto.data}</td>
              {gasto.status === "pago" ? (
                <td className="flex  items-center">
                  <Check  className="h-5 w-5 mr-2 text-green-500 " />
                  {gasto.status}
                </td>
              ) : 
              gasto.status === "aberto" ? (
                <td className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-yellow-400" />
                  {gasto.status}
                </td>
              ) : gasto.status === "cancelado" ? (
                <td className="flex items-center">
                  <X className="h-5 w-5 mr-2 text-red-500" />
                  {gasto.status}
                </td>
              ) : null
              }
              <td>{gasto.descricao}</td>
              <td className="text-red-500">-{gasto.valor}</td>
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

export default GastosTable;
