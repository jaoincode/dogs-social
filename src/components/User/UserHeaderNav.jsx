import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import MinhasFotos from '../../assets/feed.svg';
import Estatisticas from '../../assets/estatisticas.svg';
import Adicionar from '../../assets/adicionar.svg';
import Sair from '../../assets/sair.svg';
import styles from './UserHeaderNav.module.css';

export const UserHeaderNav = () => {
  const { mobile, setMobile } = useState(null);
  const { userLogout } = useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <img src={MinhasFotos} />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <img src={Estatisticas} />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="/conta/postar">
        <img src={Adicionar} />
        {mobile && 'Adicionar Foto'}
      </NavLink>
      <button onClick={userLogout}>
        <img src={Sair} />
        {mobile && 'Sair'}
      </button>
    </nav>
  )
}