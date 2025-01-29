import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast'
import axios from 'axios'
import useUser from '@/hooks/useUser';
// TODO: Implementar a função onSubmit
// TODO: Usuario vai ter um local para registrar quais categorias ele quer, com um limite de 5 categorias para usuario padrão, 
//       e 20 para usuario premium (implementar sistema de diferenciação de usuario)
const ModalRecorrentes = ({isOpen, setIsOpen, url}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const user = useUser()
    const api = process.env.NEXT_PUBLIC_API_URL
    
    const onSubmit = async (data) => {
        console.log(data, "ModalRecorrentes");
        const userType = 'standard'; // This should be dynamically determined based on the logged-in user

        const maxCategories = userType === 'premium' ? 20 : 10;

        if (data.categoria.length > maxCategories) {
            toast.error(`Você pode registrar no máximo ${maxCategories} categorias.`);
            return;
        }  
        data.tipo = "recorrente"
        data.userID = user.id
        await axios.post(`${api}${url}`, data)
        toast.success("Recorrente registrado com sucesso")

        // Proceed with form submission logic, e.g., sending data to an API
        console.log('Form submitted successfully:', data);
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
                <h2 className="text-2xl text-white dark:text-black font-bold mb-4">Registrar Gasto Recorrente</h2>
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
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoria">
                            Categoria
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                            id="categoria"
                            {...register('categoria', { required: true })}
                        >

                            <option value="streaming">Streaming</option>
                            <option value="casa">Carro</option>
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
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded"
                        >
                        Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default ModalRecorrentes;