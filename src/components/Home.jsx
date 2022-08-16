import React from 'react';
import styles from './Home.module.css';
import { Feed } from './Feed/Feed';
import { Loading } from './Helper/Loading';
import { Head } from './Helper/Head';

export const Home = () => {
  return (
    <section className='container mainContainer'>
      <Head title="Fotos" description="Home do site dogs, com feed de fotos" />
      <Feed />
    </section>
  )
}