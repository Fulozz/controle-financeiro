"use client"
import React, { useState } from "react";
import { useProtectedRoute } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import useUser from "@/hooks/useUser";

const ModalCadastroPago = ({ isOpen, setIsOpen }) => {
  const { isLoading, isAuthenticated } = useProtectedRoute();

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
  const [paymentMethod, setPaymentMethod] = useState('debito');
  const [numberOfInstallments, setNumberOfInstallments] = useState(null);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    if (event.target.value === 'credito') {
      setNumberOfInstallments(1); // Valor inicial para crédito
    } else {
      setNumberOfInstallments(null); // Limpa o valor se não for crédito
    }
  };
  const onSubmit = (data) => {
    console.log(data);
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
                  <label htmlFor="formaPagamento" className="text-black">Forma de pagamento</label>
                    <select 
                    value={paymentMethod} 
                    onChange={handlePaymentMethodChange} 
                    {...register("formaPagamento", { required: true })}
                    className="border-2 p-2 rounded-md mb-2">
                      <option value="debito">debito</option>
                      <option value="credito">Crédito</option>
                      {/* Outras opções de pagamento */}
                    </select>
                    {paymentMethod === 'credito' && (
                      <select value={numberOfInstallments} onChange={(e) => setNumberOfInstallments(e.target.value)}>
                        <option value="1">1x</option>
                        <option value="2">2x</option>
                        {/* Outras opções de parcelamento */}
                      </select>
                    )}
                  {errors.formaPagamento && (
                    <span className="text-red-500">Campo obrigatório</span>
                  )}
                </div>
              <div className="flex flex-col">
                <label htmlFor="valor" className="text-black">
                  Valor
                </label>
                <input
                  type="number"
                  id="valor"
                  {...register("valor", { required: false })}
                  className="border-2 p-2 rounded-md mb-2"
                />
                {errors.valor && (
                  <span className="text-red-500">Campo obrigatório</span>
                )}
              </div>
              {
                  paymentMethod === 'credito' ? (
                    <>
                    <label htmlFor="parcelas" className="text-black">Parcelas</label>
                    <input
                      type="number"
                      id="parcelas"
                      {...register("parcelas", { required: false })}
                      className="border-2 p-2 rounded-md mb-2"
                    />
                    </>
                  ) : null
                }
              <div className="flex flex-col">
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
