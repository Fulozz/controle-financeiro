"use client"
import React, { useState, useEffect } from 'react';
import useUser from '@/hooks/useUser';
import axios from 'axios';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useProtectedRoute } from '@/hooks/useAuth';

const page = () => {
  const user = useUser();
  const [userData, setUserData] = useState({
    name: user.name || '',
    email: user.email || '',
    diaVencimento: user?.diaVencimento || 0, // Assuming diaVencimento is a number
  });

  useEffect(() => {
    if (user) { // Check if user data is available
        setUserData({
            name: user.name || '',
            email: user.email || '',
            diaVencimento: user?.diaVencimento || 0
        });
    }
}, [user]);
  const token = useLocalStorage();
  const api = process.env.NEXT_PUBLIC_API_URL;

  const [isEditing, setIsEditing] = useState(false); // Assuming initial edit mode

  const { isLoading, isAuthenticated} = useProtectedRoute();
  if(isLoading | !user) {
    return (
      <div className='loading h-auto w-full '>Carregando...</div>
    )
  }
  if(!isAuthenticated) {
    // Redirecionamento já é realizado no hook
    return null;
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const updatedUser = {
        name: userData.name,
        diaVencimento: userData.diaVencimento
      }; // Use userData state directly for update
      const response = await axios.put(`${api}/api/v1/user/update/${user.id}`, updatedUser, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setIsEditing(false); // Switch back to display mode
    } catch (error) {
      console.error('Erro ao salvar as alterações:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value }); // Update userData with new value
  };

  const logout = () => {
    // Implement logout logic here (e.g., remove token from storage, redirect)
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div className="px-4  p-6  md:pl-[270px] flex flex-col justify-between min-h-[85vh] w-full  text-black   dark:text-white">
      <div>
      <h1 className="text-3xl font-bold mb-6">Perfil</h1>
      {isEditing ? (
        <form onSubmit={handleSave} className="space-y-4 p-6 rounded shadow-md bg-white dark:bg-gray-700">
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2">Nome:</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="p-2 border rounded border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2">Email:</label>
            <p className="p-2 rounded bg-gray-200 dark:bg-gray-600">{userData.email}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2">Data de vencimento do cartão:</label>
            <input
              type="number"
              name="diaVencimento"
              value={userData.diaVencimento}
              onChange={handleChange}
              className="p-2 border rounded border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white"
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Salvar
          </button>
        </form>
      ) : (
        <div className="space-y-4 p-6 rounded shadow-md bg-white dark:bg-gray-700">
          <p className="text-lg"><span className="font-medium">Nome:</span> {userData.name}</p>
          <p className="text-lg"><span className="font-medium">Email:</span> {userData.email}</p>
          <p className="text-lg"><span className="font-medium">Data de vencimento do cartão:</span> {userData.diaVencimento}</p>
          <button onClick={handleEdit} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
            Editar
          </button>
        </div>
      )}
      </div>
      <button onClick={logout} className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
        Logout
      </button>
    </div>
  );
};

export default page;