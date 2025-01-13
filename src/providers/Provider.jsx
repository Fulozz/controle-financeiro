"use client"

import React, { useState } from 'react';
import  { Toaster } from 'react-hot-toast'
import { ThemeProvider } from 'next-themes';
import Sidebar from '@/components/sidebar/Sidebar';
import { AuthProvider, useProtectedRoute } from "@/hooks/useAuth";
import SidebarController from '@/components/sidebar/controller/SidebarController';
const Provider = ({ children }) => {
    const [isActive, setIsActive] = useState(false)

    // testar isso para controler a sidebar se o usuário estiver autenticado
    return (
        <div>
            <ThemeProvider attribute="class" defaultTheme='dark'>
                <AuthProvider>
                    <Toaster position="top-center" reverseOrder={false} toastOptions={{duration: 2000}} />
                    <SidebarController isActive={isActive} setIsActive={setIsActive} />
                    <Sidebar isActive={isActive} setIsActive={setIsActive} />
                    {children}
                </AuthProvider>
            </ThemeProvider>
        </div>
    );
}

export default Provider