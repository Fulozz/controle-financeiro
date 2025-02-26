import { useState, useEffect } from 'react';
import axios from 'axios';

const useInstallments = () => {
    const [installments, setInstallments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInstallments = async () => {
            try {
                const response = await axios.get('/api/v1/transaction/installments');
                setInstallments(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchInstallments();
        const intervalId = setInterval(fetchInstallments, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return { installments, loading, error };
};

export default useInstallments;