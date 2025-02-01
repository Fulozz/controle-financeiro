
"use client";

import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import Sidebar from "@/components/sidebar/Sidebar";
import { AuthProvider, useProtectedRoute } from "@/hooks/useAuth";
import BottomBar from '@/components/bottombar/BottomBar'

const Provider = ({ children }) => {
  

  // testar isso para controler a sidebar se o usuário estiver autenticado
  return (
    <div>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <AuthProvider>
            <Toaster
              position="top-center"
              reverseOrder={false}
              toastOptions={{ duration: 2000 }}
            />
              <Sidebar />
              <div className="flex pb-[120px] md:block md:pb-0" >
                {children}
              </div>
              <BottomBar />
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
};

export default Provider;
