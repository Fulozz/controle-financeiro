import { useState, useEffect } from 'react';
import axios from 'axios';
import useLocalStorage from './useLocalStorage';

const useRecurring = ( userID ) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = useLocalStorage();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://portfolio-backend-zpig.onrender.com/api/v1/transaction/recurring/${userID}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                      }
                });
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };
        if(token && userID) {
            fetchData();
        }
    }, [ userID, token]);

    return { data, isLoading, error };
};

export default useRecurring;