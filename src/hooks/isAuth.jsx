"use client"

import { useEffect } from 'react'
import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/utils/Auth'

export default function isAuth(Component) {
    return function IsAuth(props){
        const auth = isAuthenticated;
        useEffect(()=> {
            if(!auth){
                redirect('/login')
            }
        }
        , [])

        if(!auth) return null;
        return <Component {...props} />
    }
}