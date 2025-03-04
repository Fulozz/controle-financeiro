import { useState, useEffect } from 'react';
import axios from 'axios';
import useLocalStorage from './useLocalStorage';

const useFinancialReport = ({ userId }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = useLocalStorage()
    useEffect(() => {
        const fetchFinancialReport = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/transaction/finances/report/${userId}`,
                    {
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                      }
                );
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        const intervalId = setInterval(fetchFinancialReport, 1000);
        fetchFinancialReport();
        return () => clearInterval(intervalId);

    }, []);

    return { data, loading, error };
};

export default useFinancialReport;