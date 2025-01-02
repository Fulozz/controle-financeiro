"use client"
import React from 'react'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/navbar/Navbar'


export default function Providers({children}) {
  
  return (
    <ThemeProvider attribute="class" defaultTheme='dark'>
      <Toaster position="top-center" reverseOrder={false} />
        
        {children}
    </ThemeProvider>
  )
}