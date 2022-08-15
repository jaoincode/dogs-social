import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

export const RequireAuth = ({ children, redirectTo }) => {
  const { login } = useContext(UserContext);
  return login ? children : <Navigate to={redirectTo} />
}