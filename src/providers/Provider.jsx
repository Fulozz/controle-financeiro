
"use client";

import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import Sidebar from "@/components/sidebar/Sidebar";
import { AuthProvider, useProtectedRoute } from "@/hooks/useAuth";
import { useSidebar } from "@/hooks/useSidebar";
import SidebarController from "@/components/sidebar/controller/SidebarController";
import { SidebarProvider } from "@/hooks/useSidebar";
const Provider = ({ children }) => {
  useSidebar

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
            <Sidebar />
            <SidebarController />
              <div className={``}>
              {children}
              </div>
          </SidebarProvider>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
};

export default Provider;
