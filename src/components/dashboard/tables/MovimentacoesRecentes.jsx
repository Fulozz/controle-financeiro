"use client"
import React from "react";
import {  X,  Dot, MoveRight } from "lucide-react";


const MovimentacoesRecentes = ({user, data}) => {

  const gastos = data
  console.log(data)
    const limit = 10;
    // Sort gastos by date in descending order (most recent first)
    const sortedGastos = gastos.slice(0, limit).sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="overflow-w-auto shadow-lg bg-white dark:bg-black border-white border-2 rounded-lg p-2">
      <table className="min-w-full divide-y divide-gray-700 dark:divide-gray-200">
        <caption className="px-4"><div className="flex justify-between"><span>Movimentações recentes</span> <a href="/transacoes" className="flex justify-center items-center"><span className="pr-2">Todas movimentações</span> <MoveRight className="h-4 w-4" /></a></div></caption>
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
              Data
            </th>
            <th className="px-6 py-3 hidden text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
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
              <td>{gasto.title}</td>
              {gasto.status === "pago" ? (
                <td className="flex  items-center">
                  <Dot size={32} strokeWidth={3} className=" mr-2 text-green-500 " />
                  {gasto.status}
                </td>
              ) : 
              gasto.status === "agendado" ? (
                <td className="flex items-center">
                  <Dot size={32} strokeWidth={3} className=" mr-2 text-yellow-500 " />
                  {gasto.status}
                </td>
              ) : gasto.status === "cancelado" ? (
                <td className="flex items-center">
                  <X size={32} strokeWidth={3} className=" mr-2 text-red-500 " />
                  {gasto.status}
                </td>
              ) : gasto.status === "recebido" ? (
                <td className="flex items-center">
                  <Dot size={32} strokeWidth={3} className=" mr-2 text-blue-500 " />
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
