import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { LoginCreate } from './LoginCreate';
import { LoginPasswordLost } from './LoginPasswordLost.jsx';
import { LoginPasswordReset } from './LoginPasswordReset';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css';

export const Login = () => {
  const { login } = useContext(UserContext);

  if (login) return <Navigate to="/conta" />
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/criar" element={<LoginCreate />} />
          <Route path="/ajuda" element={<LoginPasswordLost />} />
          <Route path="/resetar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  )
}