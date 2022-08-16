import React from 'react';
import styles from './Home.module.css';
import { Feed } from './Feed/Feed';

export const Home = () => {
  return (
    <section className='container mainContainer'>
      <Feed />
    </section>
  )
}