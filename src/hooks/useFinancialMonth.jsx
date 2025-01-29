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
 * const { data, loading, error } = useFinancialMonth('user123', '2023-10');
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
import useLocalStorage from '@/hooks/useLocalStorage'

const useFinancialMonth = (userId, mesRef, forceUpdate = false) => {
    const [dataArr, setDataArr] = useState([]); // Armazena os dados em um array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = useLocalStorage()
    const api = process.env.NEXT_PUBLIC_API_URL
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${api}/api/v1/transaction/finances/recent/${userId}/${mesRef}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                      }
                });
                const data = response.data.data;
                const newDataArray = data.map((item) => ({
                    id: item.id,
                    data: item.date,
                    titulo: item.titulo,
                    status: item.status,
                    descricao: item.descricao,
                    valor: item.valor,
                    createdAt: item.createdAt
                }));
                setDataArr(newDataArray);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if(token && userId && mesRef || forceUpdate) {
            fetchData();
        }
    }, [forceUpdate, userId, mesRef]);

    return { data: dataArr, loading, error, forceUpdate };

  };

export default useFinancialMonth;