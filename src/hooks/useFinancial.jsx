"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Hook para buscar dados financeiros do usuário
const useFinancial = (userID, mesRef) => {
  const token = localStorage.getItem('token');
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Envia uma requisição para o backend para pegar os dados financeiros
        const response = await axios.get(`https://portfolio-backend-zpig.onrender.com/api/v1/transaction/finances/${userID}/${mesRef}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados financeiros:', error);
        setError(error);
      } finally {
        setIsLoading(false);
        console.log('Busca de dados financeiros finalizada.');
      }
    };

    if (token && userID && mesRef) {
      fetchData();
    }
  }, [token, userID, mesRef]);

  return { data, isLoading, error };
};

export default useFinancial;