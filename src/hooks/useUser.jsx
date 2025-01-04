"use client"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'


const useUser = () => {
    
    const [user, setUser] = useState(null)
    const router = useRouter()

    useEffect(()=> {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if(!token){
                return (router.push('/login'))
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