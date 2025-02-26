/**
 * Custom hook to fetch financial data for a specific user and month.
 *
 * @param {string} userId - The ID of the user.
 * @param {string} mesRef - The reference month in the format 'YYYY-MM'.
 * @returns {Object} An object containing the following properties:
 * - {Object|null} data - The fetched financial data or null if not yet fetched.
 * - {boolean} loading - A boolean indicating if the data is currently being fetched.
 * - {Object|null} error - An error object if an error occurred during fetching, or null if no error.
 *
 * @example
 * const { data, loading, error } = useFinancial( 'Im an token','user123', '2023-10');
 *
 * if (loading) {
 *   return <div>Loading...</div>;
 * }
 *
 * if (error) {
 *   return <div>Error: {error.message}</div>;
 * }
 *
 * return (
 *   <div>
 *     <h1>Financial Data for October 2023</h1>
 *     <pre>{JSON.stringify(data, null, 2)}</pre>
 *   </div>
 * );
 */


"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import useLocalStorage from './useLocalStorage';

// Hook para buscar dados financeiros do usuário
const useFinancial = (userID, mesRef) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = useLocalStorage();
  const api = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Envia uma requisição para o backend para pegar os dados financeiros
        const response = await axios.get(`${api}/api/v1/transaction/finances/${userID}/${mesRef}`, {
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
      }
    };

    if (token && userID && mesRef) {
      fetchData();
      const intervalId = setInterval(fetchData, 5000); // Atualiza a cada 5 segundo

      return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
    }
  }, [token, userID, mesRef]);

  return { data, isLoading, error };
};

export default useFinancial;