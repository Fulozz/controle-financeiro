"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'; // Import axios for making requests
import toast from 'react-hot-toast';

const page = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post('https://portfolio-backend-zpig.onrender.com/api/v1/signup', data);
      console.log('Signup successful:', response.data);
      toast.success('Conta criada com sucesso!');
      // Redirecionar para a página de login ou outra página relevante após o cadastro bem-sucedido
      redirect('/login');
    } catch (error) {
      console.error('Erro ao criar a conta:', error);
      toast.error('Falha ao criar a conta. Verifique seus dados.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-container flex items-center justify-center h-screen bg-gray-100 dark:bg-black">
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form flex flex-col w-full max-w-md bg-white rounded-md shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-4">Criar Conta</h2>
        {/* Campos de nome, email e senha */}
        <div className="form-group mb-4">
          <label htmlFor="name" className="text-gray-700 font-medium block mb-2">Nome Completo</label>
          {/* ... (restante do campo nome) */}
        </div>
        <div className="form-group mb-4">
          <label htmlFor="email" className="text-gray-700 font-medium block mb-2">Endereço de Email</label>
          {/* ... (restante do campo email) */}
        </div>
        <div className="form-group mb-4">
          <label htmlFor="password" className="text-gray-700 font-medium block mb-2">Senha</label>
          {/* ... (restante do campo senha) */}
        </div>
        {/* Adicionar campo para confirmar senha, se necessário */}
        <button type="submit" disabled={isLoading} className="login-button w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed">
          {isLoading ? 'Criando Conta...' : 'Criar Conta'}
        </button>
      </form>
    </div>
  );
};

export default page;