"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast'
import axios from 'axios'
import useUser from '@/hooks/useUser'
import { LoaderCircle } from 'lucide-react'
import useLocalStorage from '@/hooks/useLocalStorage';

const ModalParcelados = ({isOpen, setIsOpen, url    }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ isLoading, setIsLoading] = useState(false)
    const user = useUser()
    const api = process.env.NEXT_PUBLIC_API_URL
    
    const onSubmit = async (data) => {
        const token = useLocalStorage()
        try {
            setIsLoading(true)
            data.tipo = "parcelado"
            data.formaPagamento = "credito"
            data.userID = user.id
            const response = await axios.post(`${api}${url}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                  }, 
            })

            if(response.status === 200){
            toast.success('Gasto parcelado registrado com sucesso');
            setIsOpen(false);
            }
        } catch (error) {
            toast.error("Erro ao registrar parcelado, atualize a sua pagina e tente novamente");
            setIsOpen(false);
        } finally {

            setIsOpen(false);
            setIsLoading(false);
        }
    };

    return (
        <>
        
        {isOpen === true && (
            <div
            onClick={()=> setIsOpen(false)}
            className="fixed inset-0 z-50 bg-black/50" // Adjust opacity as needed
            />
        )}
        <div className="fixed inset-0 z-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg  h-full w-full md:w-[500px] md:h-auto">
                <h2 className="text-2xl text-white dark:text-black font-bold mb-4">Registrar Gasto Parcelado</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">
                            Nome
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                            id="nome"
                            type="text"
                            placeholder="Nome do registro"
                            {...register('titulo', { required: true })}
                        />
                        {errors.nome && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="diaVencimento">
                            Dia de Vencimento
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                            id="diaVencimento"
                            {...register('diaVencimento', { required: true })}
                        >
                            <option value="1">1</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                        </select>
                        {errors.diaVencimento && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="valor">
                            Valor
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                            id="valor"
                            type="number"
                            placeholder="Valor"
                            step="any"
                            {...register('valor', { required: true })}
                        />
                        {errors.valor && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="parcelas">
                            Número de Parcelas
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                            id="parcelas"
                            type="number"
                            placeholder="Número de Parcelas"
                            {...register('parcelas', { required: true })}
                        />
                        {errors.parcelas && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoria">
                            Categoria
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                            id="categoria"
                            {...register('categoria', { required: true })}
                        >
                            <option value="streaming">Streaming</option>
                            <option value="carro">Carro</option>
                            <option value="casa">Casa (Energia, Água)</option>
                            <option value="outros">Outros</option>
                        </select>
                        {errors.categoria && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
                    </div>
                    <div className="flex justify-between ml-2">
                        <div
                        onClick={() => setIsOpen(false)}
                        className="text-white bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded"
                        >
                        Sair
                        </div>
                        <button
                        id="submitButton"
                        type="submit"
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded ${isLoading ? 'cursor-not-allowed' : ''}`}
                        >
                        { isLoading ? (<LoaderCircle className='animate-spin' /> ): 'Enviar' }
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default ModalParcelados;