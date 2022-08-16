import React, { useEffect, useState } from 'react';
import { Input } from '../Forms/Input';
import { Button } from '../Forms/Button';
import { useForm } from '../../hooks/useForm';
import { useFetch } from '../../hooks/useFetch';
import { PASSWORD_RESET } from '../../api';
import { Error } from '../Helper/Error';
import { useNavigate } from 'react-router-dom';
import { Head } from '../Helper/Head';

export const LoginPasswordReset = () => {
  const [login, setLogin] = useState('');
  const [key, setKey] = useState('');
  const password = useForm('password');
  const { error, loading, data, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');

    if (key) setKey(key);
    if (login) setKey(login);
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({ login, key, password: password.value });
      const { response } = await request(url, options);
      if (response.ok) navigate('/login');
    }
  }

  return (
    <section className='animeLeft'>
      <Head title="Resete a senha?" />
      <h1 className='title'>Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" name="password" {...password} />
        {loading ? <Button disabled>Resetando</Button> : <Button>Resetar</Button>}
      </form>
      <Error error={error} />
    </section>
  )
}