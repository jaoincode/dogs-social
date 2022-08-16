import React from 'react';
import styles from './Footer.module.css';
import DogsFooter from '../assets/dogs-footer.svg';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={DogsFooter} />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  )
}