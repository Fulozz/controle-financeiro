"use client"

import React from 'react';
import  { Toaster } from 'react-hot-toast'
import { ThemeProvider } from 'next-themes';
import Sidebar from '@/components/sidebar/Sidebar';
import { AuthProvider } from "@/hooks/useAuth";
const Provider = ({ children }) => {
    return (
        <div>
            <ThemeProvider attribute="class" defaultTheme='dark'>
                <AuthProvider>
                    <Toaster position="top-center" reverseOrder={false} toastOptions={{duration: 2000}} />
                    <Sidebar />
                    {children}
                </AuthProvider>
            </ThemeProvider>
        </div>
    );
}

export default Provider