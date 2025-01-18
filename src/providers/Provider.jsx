"use client";

import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import Sidebar from "@/components/sidebar/Sidebar";
import { AuthProvider, useProtectedRoute } from "@/hooks/useAuth";
import SidebarController from "@/components/sidebar/controller/SidebarController";
import { SidebarProvider } from "@/hooks/useSidebar";
import { GastosProvider } from "@/context/GastosContext";
const Provider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  // testar isso para controler a sidebar se o usuário estiver autenticado
  return (
    <div>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <AuthProvider>
          <SidebarProvider>
            <Toaster
              position="top-center"
              reverseOrder={false}
              toastOptions={{ duration: 2000 }}
            />
            <Sidebar isActive={isActive} setIsActive={setIsActive} />
            <GastosProvider>{children}</GastosProvider>
          </SidebarProvider>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
};

export default Provider;
