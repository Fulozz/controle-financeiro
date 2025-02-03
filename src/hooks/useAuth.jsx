
/**
 * Context to share the authentication state
 * @type {React.Context}
 */

/**
 * Provider to wrap the application and provide the authentication context
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child components to be wrapped by the provider
 * @returns {JSX.Element} - AuthProvider component
 */

/**
 * Hook to access the authentication context
 * @returns {{ isAuthenticated: boolean, isLoading: boolean }} - Authentication and loading state
 * @throws {Error} - If the hook is used outside of an AuthProvider
 */

/**
 * Hook to check if the user is logged in and redirect if not
 * @returns {{ isLoading: boolean, isAuthenticated: boolean }} - Authentication and loading state
 */

/**
 * Hook to check if the user is logged in without redirecting
 * @returns {boolean} - Authentication state
 */


"use client";
import { useState, useEffect, createContext, useContext } from 'react';
import { useRouter } from 'next/navigation';

// Contexto para compartilhar o estado de autenticação
const AuthContext = createContext();

// Provider para envolver a aplicação e fornecer o contexto de autenticação
const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verifica se há um token de autenticação armazenado
    const token = localStorage.getItem('token');

    if (token) {
      // Envia uma requisição para o backend para validar o token
      fetch(`https://portfolio-backend-zpig.onrender.com/api/v1/validate-token`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        setIsAuthenticated(data.isAuthenticated);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Erro ao verificar autenticação:', error);
        setIsLoading(false);
      });
    } else {
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acessar o contexto de autenticação
const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

// Hook para verificar se o usuário está logado e caso não esteja redirecione
// const { isAuthenticated, isLoading } = useProtectedRoute()
const useProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.push('/');
    }
  }, [isAuthenticated, isLoading, router]);

  return { isLoading, isAuthenticated };
};

// Hook para verificar se o usuário está logado sem realizar redirecionamento
// const isAuthenticated = isUserLoggedIn()
const isUserLoggedIn = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated;
};

export { AuthProvider, useAuth, useProtectedRoute, isUserLoggedIn };