import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/providers/Provider";


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
    <html lang="en" suppressHydrationWarning>
      <body
      suppressHydrationWarning={true}
        cz-shortcut-listen="true"
        className={`${geistSans.variable} ${geistMono.variable} antialiased   bg-slate-200 text-black dark:text-white dark:bg-[#09090B]`}
      >
        <Provider>
          { children }
        </Provider>
      </body>
    </html>
  );
}
