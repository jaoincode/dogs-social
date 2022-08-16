import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { Feed } from '../Feed/Feed';
import { Head } from '../Helper/Head';
import { NotFound } from '../NotFound';
import { UserHeader } from './UserHeader';
import { UserPhotoPost } from './UserPhotoPost';

export const User = () => {
  const { data } = useContext(UserContext);

  return (
    <section className='container'>
      <Head title="Minha conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}