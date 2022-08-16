import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import MinhasFotos from '../../assets/feed.svg';
import Adicionar from '../../assets/adicionar.svg';
import Sair from '../../assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import { useMedia } from '../../hooks/useMedia';

export const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname])

  return (
    <>
      {mobile &&
        <button
          aria-label='Menu'
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
          onClick={() => setMobileMenu(!mobileMenu)}>
        </button>
      }
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive
        }`}>
        <NavLink to="/conta" end>
          <img src={MinhasFotos} />
          {mobile && 'Minhas Fotos'}
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
    </>
  )
}