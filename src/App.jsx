import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { RequireAuth } from './components/Helper/ProtectedRoute';
import { Home } from './components/Home';
import { Login } from './components/Login/Login';
import { NotFound } from './components/NotFound';
import { Photo } from './components/Photo/Photo';
import { User } from './components/User/User';
import { UserProfile } from './components/User/UserProfile';
import { UserStorage } from './UserContext';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className='AppBody'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route
                path="conta/*"
                element={
                  <RequireAuth redirectTo="/login" >
                    <User />
                  </RequireAuth>
                }
              />
              <Route path="/foto/:id" element={<Photo />} />
              <Route path="/perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
