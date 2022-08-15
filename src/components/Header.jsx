import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Dogs from '../assets/dogs.svg';
import { UserContext } from '../UserContext';
import { useContext } from 'react';

export const Header = () => {
  const { data, userLogout } = useContext(UserContext);

  return (
    <div className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Ir para Home" >
          <img src={Dogs} />
        </Link>
        {data ? (
          <Link to="/conta" className={styles.login}>
            Minha conta ({data.nome})
          </Link>) :
          (<Link to="/login" className={styles.login}>
            Login / Criar
          </Link>)
        }
      </nav>
    </div>
  )
}