"use client"
import React, { useState, useEffect } from 'react';
import useUser from '@/hooks/useUser';
import axios from 'axios';
import useLocalStorage from '@/hooks/useLocalStorage';

const page = () => {
  const user = useUser();
  const [userData, setUserData] = useState({
    name: user.name || '',
    email: user.email || '',
    diaVencimento: user.config?.diaVencimento || '', // Assuming diaVencimento is a string
  });
  console.log(userData, user)
  useEffect(() => {
    if (user) { // Check if user data is available
        setUserData({
            name: user.name || '',
            email: user.email || '',
            diaVencimento: user.config?.diaVencimento || ''
        });
    }
}, [user]);
  const token = useLocalStorage();
  const api = process.env.NEXT_PUBLIC_API_URL;
  const [isEditing, setIsEditing] = useState(true); // Assuming initial edit mode

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const updatedUser = {
        name: userData.name,
        config: { 
          ...user.config,
          diaVencimento: userData.diaVencimento 
        }
      }; // Use userData state directly for update
      const response = await axios.put(`${api}/api/v1/user/update/${user.id}`, updatedUser, {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      console.log('Salvando as alterações:', response.data); // Assuming response is available
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
  };

  return (
    <div className="pl-0 md:pl-[270px]">
      <h1>Perfil</h1>
      {isEditing ? (
        <form onSubmit={handleSave} className="flex flex-col">
          <div className="flex">
            <label className="pr-2">
              Nome:
            </label>
            <input type="text" name="name" value={userData.name} onChange={handleChange} />
          </div>
          <label>
            Email:
            <input type="email" name="email" value={userData.email} onChange={handleChange} />
          </label>
          <label>
            Data de vencimento do cartão:
            <input type="text" name="diaVencimento" value={userData.diaVencimento} onChange={handleChange} />
          </label>
          <button type="submit">Salvar</button>
        </form>
      ) : (
        <div>
          <p>Nome: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Data de vencimento do cartão: {userData.diaVencimento}</p>
          <button onClick={handleEdit}>Editar</button>
        </div>
      )}
      <button onClick={logout}>Sair</button>
    </div>
  );
};

export default page;