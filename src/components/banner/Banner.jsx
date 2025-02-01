"use client"
import React, { useState } from 'react';

function InstallBanner() {
  const [isShown, setIsShown] = useState(true); // Você pode ajustar essa lógica para mostrar o banner em condições específicas

  const handleInstall = () => {
    // Lógica para mostrar as instruções de instalação
    alert('Toque e segure no ícone do seu navegador e escolha "Adicionar à tela inicial"');
  };

  return (
    <div className="fixed flex flex-col bottom-0 left-0 right-0 pb-[170px] h-10  bg-blue-500 text-white p-4 text-center">
      Adicione este site à sua tela inicial para um acesso mais rápido!
      <button onClick={handleInstall} className="bg-white text-blue-500 rounded-md px-4 py-2">
        Instalar
      </button>
    </div>
  );
}

export default InstallBanner;