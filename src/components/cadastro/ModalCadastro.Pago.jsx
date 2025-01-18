"use client";
import React, { useState, useEffect } from "react";
import { useProtectedRoute } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import useUser from "@/hooks/useUser";
import toast from 'react-hot-toast'
import axios from "axios";
const ModalCadastroPago = ({ isOpen, setIsOpen }) => {
  const { isLoading, isAuthenticated } = useProtectedRoute();
  const [postLoading, setPostLoading]= useState(false);
  const user = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  if (isLoading | !user) {
    return <div className="loading">Carregando...</div>;
  }
  if (!isAuthenticated) {
    // Redirecionamento já é realizado no hook
    return null;
  }
  // TODO: Implementar a função onSubmit

  const onSubmit = async (data) => {
    console.log(data)
    try{
      const date = new Date(data.date);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
      data.mesRef = `${year}-${month}`;
      setPostLoading(true)
      data.userID = user.id;
      data.tipo = "pago"
      // TODO: implementar reload de tela ao concluir e fornecer feedback ao usuário
      const response = await axios.post(`https://portfolio-backend-zpig.onrender.com/api/v1/transaction/register`,data)
      if(!response.ok){
        setPostLoading(false)
        toast.error("Erro ao cadastrar pagamento")
      }
      
      toast.success("Pagomento cadastrado com sucesso")
      setPostLoading(false)
      setIsOpen(false)
      console.log(data)
    }catch (error){
      console.log(error)
      toast.error("Erro ao cadastrar pagamento")
    }
  };

  return (
    <>
      {isOpen === true && (
        <div
          className="fixed inset-0 z-40 bg-black/50" // Adjust opacity as needed
        />
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg  md:w-[500px] md:h-auto w-screen h-screen">
            <h1 className="flex text-black text-[2rem] text-center mb-2">
              Pago
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col">
                <label htmlFor="titulo" className="text-black">
                  Titulo
                </label>
                <input
                  type="text"
                  id="titulo"
                  {...register("titulo", { required: true, maxLength: 20 })}
                  className="border-2 p-2 rounded-md mb-2"
                />
                {errors.descricao && (
                  <span className="text-red-500">Campo obrigatório</span>
                )}
              </div>
              <div className="flex flex-col">
                {/* ... other form fields */}
                <label htmlFor="formaPagamento" className="text-black">
                  Forma de pagamento
                </label>
                <select
                  id="formaPagamento"
                  {...register("pagamento", { required: true })}
                  className="border-2 p-2 rounded-md mb-2"
                >
                  <option value="">Selecione o método de pagamento</option>
                  <option value="debito">Débito</option>
                  <option value="credito">Crédito</option>
                </select>
                <div className="flex flex-col">
                  <label htmlFor="parcelas" className="text-black">
                    * Caso for crédito:{" "}
                    <span className="font-semibold">Parcelas</span>
                  </label>
                  <input
                    type="number"
                    name="parcelas"
                    id="parcelas"
                    className="border-2 p-2 rounded-md mb-2"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="valor" className="text-black">
                  Valor
                </label>
                <input
                  type="number"
                  id="valor"
                  step='any'
                  {...register("valor", { required: false })}
                  className="border-2 p-2 rounded-md mb-2"
                />
                {errors.valor && (
                  <span className="text-red-500">Campo obrigatório</span>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col w-full">
                  <label htmlFor="date" className="text-black">
                    Data
                  </label>
                  <input
                    type="date"
                    id="date"
                    {...register("date", { required: true })}
                    className="border-2 p-2 rounded-md mb-2"
                  />
                  {errors.date && (
                    <span className="text-red-500">Campo obrigatório</span>
                  )}
                </div>

                <div className="flex flex-col w-full">
                  <label htmlFor="status" className="text-black">
                    Status
                  </label>
                  <select className="border-2 p-2 rounded-md mb-2" {...register('status', {required: true })}>
                    <option value="pago">Pago</option>
                    <option value="agendado">Agendado</option>
                    <option value="cancelado">Cancelado</option>
                  </select>
                  {errors.status && (
                    <span className="text-red-500">Campo obrigatório</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="descricao" className="text-black">
                  Descrição
                </label>
                <textarea
                  id="descricao"
                  {...register("descricao", { required: true })}
                  className="border-2 p-2 rounded-md mb-2"
                />
                {errors.descricao && (
                  <span className="text-red-500">Campo obrigatório</span>
                )}
              </div>
              <div className="flex justify-between ml-2">
                <div
                  onClick={() => setIsOpen(false)}
                  className="text-white bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded"
                >
                  Sair
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCadastroPago;
