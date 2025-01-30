/**
 * Custom hook to fetch and manage user data.
 *
 * This hook retrieves user data from a backend API using a token stored in localStorage.
 * It sets the user state with the fetched data, including the user's id, name, and email.
 *
 * @returns {Object} The user object containing id, name, and email.
 *
 * @example
 * const user = useUser();
 *
 * return (
 *   <div>
 *     <p>Name: {user.name}</p>
 *     <p>Email: {user.email}</p>
 *   </div>
 * );
 */
"use client"
import { useState, useEffect } from 'react'
import axios from 'axios'

// Hook para buscar dados do usuário
const useUser = () => {
    
    const [user, setUser] = useState({name: '', email: '', id: ''})
    const api = process.env.NEXT_PUBLIC_API_URL

    useEffect(()=> {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if(!token){
                return null;
            }
            if(token){
                const response = await fetch(`${api}/api/v1/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await response.json();

            if(data){
                setUser({
                    id: data._id,
                    name: data.name,
                    email: data.email,
                    diaVencimento: data.diaVencimento
                })
            }
        }          

    }
    fetchUser()
}, [])

  return user
}

export default useUser