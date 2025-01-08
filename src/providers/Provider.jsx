"use client"

import React, { useState } from 'react';
import  { Toaster } from 'react-hot-toast'
import { ThemeProvider } from 'next-themes';
import Sidebar from '@/components/sidebar/Sidebar';
import { AuthProvider } from "@/hooks/useAuth";
const Provider = ({ children }) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div>
            <ThemeProvider attribute="class" defaultTheme='dark'>
                <AuthProvider>
                    <Toaster position="top-center" reverseOrder={false} toastOptions={{duration: 2000}} />
                    <Sidebar isActive={isActive} setIsActive={setIsActive} />
                    {children}
                </AuthProvider>
            </ThemeProvider>
        </div>
    );
}

export default Provider