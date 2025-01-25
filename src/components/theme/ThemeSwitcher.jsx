"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/utils/cn";

export default function ThemeSwitcher  () {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  // cada vez que atualiza remonta a página
  useEffect(() => setMounted(true), []);
  // verifica se já foi atualizado
  if (!mounted) return null;
  return (
    <div>
      <button
        className={cn(
          "w-fit p-2 rounded-md  active:scale-100 duration-200 bg-transparent"
        )}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        
        {theme === "light" ? (
          <Moon className="text-black h-5 w-5" />
        ) : (
          <Sun className="text-white h-5 w-5" />
        )}
      </button>
    </div>
  );
};