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


import { useState, useEffect } from 'react';
import axios from 'axios';

const useFinancialMonth = (userId, mesRef) => {
  const [data, setData] = useState([]); // Stores fetched financial data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://portfolio-backend-zpig.onrender.com/api/v1/transaction/finances/recent/${userId}/${mesRef}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data.data); // Access data from response structure
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId, mesRef]); // Re-fetch on userId or mesRef change

  return { data, loading, error };
};

export default useFinancialMonth;