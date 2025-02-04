
/**
 * Custom hook to manage a token stored in localStorage.
 *
 * This hook retrieves the token from localStorage when the component mounts
 * and provides the token value.
 *
 * @returns {string|null} The token stored in localStorage, or null if not found.
 */

"use client"
import { useState, useEffect } from 'react';

const useLocalStorage = () => {
    if (typeof window === 'undefined') {
        return null;
    }
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);
    }, []);

    return token;
};

export default useLocalStorage;