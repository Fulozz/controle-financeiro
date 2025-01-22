import React from 'react';
import { useForm } from 'react-hook-form';

const Modal = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="bg-black bg-opacity-50 fixed inset-0 z-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-2xl text-white dark:text-black font-bold mb-4">Registrar Gasto Recorrente</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">
                            Nome
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="nome"
                            type="text"
                            placeholder="Nome do registro"
                            {...register('nome', { required: true })}
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
                            {...register('valor', { required: true })}
                        />
                        {errors.valor && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
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
                            <option value="casa">Casa (Energia, Água)</option>
                            <option value="outros">Outros</option>
                        </select>
                        {errors.categoria && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Registrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;