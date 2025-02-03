import React, { useState } from "react";
import {  Dot, Check, X } from "lucide-react";
import  useRecurring  from '@/hooks/useRecurring'
import useUser from "@/hooks/useUser";
const AgendadoTable = () => {

  const user = useUser()
  const userID = user.id
  const { data, isLoading, error} = useRecurring(userID);
  const limit = 10;

  return (
    <div className="overflow-w-auto shadow-lg bg-white dark:bg-black border-white border-2 rounded-lg p-2">
      <table className="min-w-full divide-y divide-gray-700 dark:divide-gray-200">
        <caption className="">Gastos Recorrentes/Agendados</caption>
        <thead>
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
              Data
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
              Titulo
            </th>
            <th className="px-4 hidden py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
              parcela
            </th>
            <th className="px-4 hidden py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
              Status
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
              Categoria
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
              valor
            </th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, limit).map((gasto) => (
            <tr key={gasto.id}>
              <td>{gasto.diaVencimento}</td>
              <td>{gasto.titulo}</td>
                  {gasto.status === "parcelado" ? (
                  <td className=" items-center hidden">
                    {gasto.tipo} - {gasto.quantidadeParcelasAtual}/{gasto.quantidadeParcelasTotal}
                  </td>
                ) : <td className="items-center hidden">{gasto.tipo} </td> }
                {gasto.status === "recorrente" ? (
                  <td className="md:flex  items-center hidden">
                    {gasto.pago ? <Dot size={32} strokeWidth={3} className=" mr-2 text-green-500 " />: <Dot size={32} strokeWidth={3} className=" mr-2 text-yellow-500 " /> }
                    {gasto.status}
                  </td>
                ) : 
                gasto.status === "parcelado" ? (
                  <td className="md:flex items-center hidden">
                    {gasto.pago ? <Dot size={32} strokeWidth={3} className=" mr-2 text-green-500 " />: <Dot size={32} strokeWidth={3} className=" mr-2 text-yellow-500 " /> }
                    {gasto.status}
                  </td>
                ) : gasto.status === "cancelado" ? (
                  <td className="md:flex items-center hidden">
                    <Dot size={32} strokeWidth={3} className=" mr-2 text-red-500 "  />
                    {gasto.status}
                  </td>
                ) : null
                }
              <td>{gasto.categoria}</td>
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

export default AgendadoTable;
