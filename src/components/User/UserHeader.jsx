import { UserHeaderNav } from "./UserHeaderNav";
import styles from './UserHeader.module.css';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const UserHeader = () => {
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/conta/postar':
        setTitle('Adicione uma foto');
        break;
      case '/conta/estatisticas':
        setTitle('Suas estátisticas');
        break;
      default:
        setTitle('Minha conta');
    }
  }, [location])

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  )
}