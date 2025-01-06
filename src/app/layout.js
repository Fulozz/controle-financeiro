import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/navbar/Navbar";
import { AuthProvider } from "@/hooks/useAuth";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Controle Financeiro",
  description: "Este é um projeto pessoal da construção de um sistema de controle financeiro pessoal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        cz-shortcut-listen="true"
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-[10vw]  bg-white text-black dark:text-white dark:bg-black`}
      >
        <AuthProvider>
          <Toaster position="top-center" reverseOrder={false} toastOptions={{duration: 2000}} />
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
