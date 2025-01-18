// GastosContext.js
import { createContext, useState } from 'react';

const GastosContext = createContext();

export const GastosProvider = ({ children }) => {
  const [gastos, setGastos] = useState([]);

  const adicionarGasto = (novoGasto) => {
    setGastos([...gastos, novoGasto]);
  };

  return (
    <GastosContext.Provider value={{ gastos, adicionarGasto }}>
      {children}
    </GastosContext.Provider>
  );
};

export default GastosContext;