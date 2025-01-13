"use client"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

// Hook para buscar dados do usuário
const useUser = () => {
    
    const [user, setUser] = useState({name: '', email: '', id: ''})


    useEffect(()=> {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if(!token){
                return null;
            }
            if(token){
                const response = await fetch(`https://portfolio-backend-zpig.onrender.com/api/v1/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await response.json();

            if(data){
                setUser({
                    id: data._id,
                    name: data.name,
                    email: data.email
                })
            }
        }          

    }
    fetchUser()
}, [])

  return user
}

export default useUser