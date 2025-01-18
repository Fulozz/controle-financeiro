import React, { useState } from "react";
import {  Clock, Check, X } from "lucide-react";
const AgendadoTable = () => {
  const gastos = [
    {
      id: 1,
      data: "2025-01-15",
      status: "parcelado",
      descricao: "Netflix",
      valor: "R$ 150,00",
      pago: false,
      quantidadeParcelasAtual: 1,
      quantidadeParcelasTotal: 10,
      tipo: "credito",
    },
    {
      id: 2,
      data: "2025-01-10",
      status: "recorrente",
      descricao: "Gasolina",
      valor: "R$ 200,00",
      pago: true,
      dataPagamentoRecorrente: "2025-01-10",
      tipo: "debito",
    },
    {
      id: 3,
      data: "2025-01-10",
      status: "recorrente",
      descricao: "Aluguel",
      valor: "R$ 1.200,00",
      pago: false,
      dataPagamentoRecorrente: "2025-01-10",
      tipo: "debito",
    },
    {
      id: 4,
      data: "2025-01-10",
      status: "recorrente",
      descricao: "Conta de luz",
      valor: "R$ 100,00",
      pago: true,
      dataPagamentoRecorrente: "2025-01-10",
      tipo: "debito",
    },
    {
      id: 5,
      data: "2025-01-10",
      status: "recorrente",
      descricao: "Conta de água",
      valor: "R$ 80,00",
      pago: false,
      dataPagamentoRecorrente: "2025-01-10",
      tipo: "debito",
    },
    {
      id: 6,
      data: "2025-01-20",
      status: "parcelado",
      descricao: "Internet",
      valor: "R$ 120,00",
      pago: true,
      quantidadeParcelasAtual: 2,
      quantidadeParcelasTotal: 4,
      tipo: "credito",
    },
    {
      id: 7,
      data: "2025-01-10",
      status: "recorrente",
      descricao: "Academia",
      valor: "R$ 90,00",
      pago: false,
      dataPagamentoRecorrente: "2025-01-10",
      tipo: "debito",
    },
    {
      id: 8,
      data: "2025-01-10",
      status: "recorrente",
      descricao: "Spotify",
      valor: "R$ 250,00",
      pago: true,
      dataPagamentoRecorrente: "2025-01-10",
      tipo: "debito",
    },
    {
      id: 9,
      data: "2025-01-25",
      status: "parcelado",
      descricao: "Cinema",
      valor: "R$ 50,00",
      pago: false,
      quantidadeParcelasAtual: 3,
      quantidadeParcelasTotal: 10,
      tipo: "credito",
    },
    {
      id: 10,
      data: "2025-01-05",
      status: "parcelado",
      descricao: "Compra de roupas",
      valor: "R$ 500,00",
      pago: true,
      quantidadeParcelasAtual: 1,
      quantidadeParcelasTotal: 1,
      tipo: "credito",
    },
  ];
  const limit = 10;

  return (
    <div className="overflow-w-auto border-white border-2 rounded-lg p-2">
      <table className="min-w-full divide-y divide-gray-700 dark:divide-gray-200">
        <caption className="">Gastos Recorrentes/Agendados</caption>
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
              Data
            </th>
            <th className="px-6 hidden md:block py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
              parcela
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
          {gastos.slice(0, limit).map((gasto) => (
            <tr key={gasto.id}>
              <td>{gasto.data}</td>
              {gasto.status === "parcelado" ? (
                <td className=" items-center">
                  {gasto.tipo} - {gasto.quantidadeParcelasAtual}/{gasto.quantidadeParcelasTotal}
                </td>
              ) : <td className=" items-center">{gasto.tipo} </td> }
              {gasto.status === "recorrente" ? (
                <td className="flex  items-center">
                  {gasto.pago ? <Check  className="h-5 w-5 mr-2 text-green-500 " />: <Clock className="h-5 w-5 mr-2 text-yellow-400" /> }
                  {gasto.status}
                </td>
              ) : 
              gasto.status === "parcelado" ? (
                <td className="flex items-center">
                  {gasto.pago ? <Check  className="h-5 w-5 mr-2 text-green-500 " />: <Clock className="h-5 w-5 mr-2 text-yellow-400" /> }
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

export default AgendadoTable;
