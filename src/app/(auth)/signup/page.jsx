"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'; // Import axios for making requests
import toast from 'react-hot-toast';
import {redirect} from 'next/navigation';

const page = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      // Validação de senhas iguais
      if (data.password !== data.confirmPassword) {
        toast.error('As senhas informadas não são iguais.');
        setIsLoading(false);
        return; // Impede o envio do formulário se as senhas não coincidirem
      }

      const response = await axios.post(`https://portfolio-backend-zpig.onrender.com/api/v1/register`, data);
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
          <input {...register("name", { required: true })} type="text" id="name" name="name" className="form-control w-full py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="email" className="text-gray-700 font-medium block mb-2">Endereço de Email</label>
          <input {...register("email", { required: true })} type="email" id="email" name="email" className="form-control w-full py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="password" className="text-gray-700 font-medium block mb-2">Senha</label>
          <input {...register("password", { required: true })} type="password" id="password" name="password" className="form-control w-full py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="confirmPassword" className="text-gray-700 font-medium block mb-2">Confirmar Senha</label>
          <input {...register("confirmPassword", { required: true })} type="password" id="confirmPassword" name="confirmPassword" className="form-control w-full py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <button type="submit" disabled={isLoading} className="login-button w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed">
          {isLoading ? 'Criando Conta...' : 'Criar Conta'}
        </button>
        <h4 className="justify-center text-center w-full py-2 font-medium text-lg">ou</h4>
        <a href="/login" className="login-button text-center w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed"  >Login</a>
      </form>
    </div>
  );
};

export default page;