
/**
 * Custom hook to access the sidebar context.
 *
 * This hook must be used within a `SidebarProvider` to access the sidebar context.
 * If used outside of a `SidebarProvider`, it will throw an error.
 *
 * @returns {Object} The sidebar context value.
 *
 * @throws {Error} If the hook is used outside of a `SidebarProvider`.
 *
 * @example
 * const sidebarContext = useSidebar();
 *
 * return (
 *   <div>
 *     <button onClick={sidebarContext.toggleSidebar}>Toggle Sidebar</button>
 *   </div>
 * );
 */

import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }

  return context;
};

export const SidebarProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const value = {
    isActive,
    setIsActive,
  };

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
};