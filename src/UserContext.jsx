import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./api";
import { useNavigate } from 'react-router-dom';
import { useCallback } from "react";

export const UserContext = createContext();


export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const userLogout = useCallback(async function () {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
    console.log(json);
  };

  const userLogin = async (username, password) => {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Erro: Usuário Inválido`);
      const { token } = await tokenRes.json();
      localStorage.setItem('token', token);
      await getUser(token);
      navigate('/conta');
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const autoLogin = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('TOKEN INVALIDO');
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }

      }
    }

    autoLogin();
  }, [userLogout])

  return (
    <UserContext.Provider value={{ userLogin, userLogout, data, error, loading, login }}>
      {children}
    </UserContext.Provider>
  )
}