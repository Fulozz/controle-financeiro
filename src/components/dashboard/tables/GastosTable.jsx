import React, { useState } from "react";
import {  Clock, Check, X } from "lucide-react";
const GastosTable = () => {
  const gastos = [
    {
      id: 1,
      data: "2023-01-01",
      status: "aberto",
      descricao: "Compra de supermercado",
      valor: "R$ 150,00",
    },
    {
      id: 2,
      data: "2023-01-02",
      status: "pago",
      descricao: "Gasolina",
      valor: "R$ 200,00",
    },
    {
      id: 3,
      data: "2023-01-03",
      status: "pago",
      descricao: "Aluguel",
      valor: "R$ 1.200,00",
    },
    {
      id: 4,
      data: "2023-01-04",
      status: "pago",
      descricao: "Conta de luz",
      valor: "R$ 100,00",
    },
    {
      id: 5,
      data: "2023-01-05",
      status: "pago",
      descricao: "Conta de água",
      valor: "R$ 80,00",
    },
    {
      id: 6,
      data: "2023-01-06",
      status: "pago",
      descricao: "Internet",
      valor: "R$ 120,00",
    },
    {
      id: 7,
      data: "2023-01-07",
      status: "pago",
      descricao: "Academia",
      valor: "R$ 90,00",
    },
    {
      id: 8,
      data: "2023-01-08",
      status: "pago",
      descricao: "Restaurante",
      valor: "R$ 250,00",
    },
    {
      id: 9,
      data: "2023-01-09",
      status: "pago",
      descricao: "Cinema",
      valor: "R$ 50,00",
    },
    {
      id: 10,
      data: "2023-01-10",
      status: "pago",
      descricao: "Farmácia",
      valor: "R$ 30,00",
    },
  ];
  const limit = 10;

  return (
    <div className="overflow-w-auto border-white border-2 rounded-lg p-4">
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
          {gastos.slice(0, limit).map((gasto) => (
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
      <div className="text-center py-4 text-gray-500 dark:text-gray-400">
        Exibindo os ultimos {limit} itens
      </div>
    </div>
  );
};

export default GastosTable;
