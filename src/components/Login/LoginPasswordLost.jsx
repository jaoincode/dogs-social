import React from 'react';
import { Input } from '../Forms/Input';
import { Button } from '../Forms/Button';
import { useForm } from '../../hooks/useForm';
import { useFetch } from '../../hooks/useFetch';
import { PASSWORD_LOST } from '../../api';
import { Error } from '../Helper/Error';
import { Head } from '../Helper/Head';

export const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href
      });
      const { json } = await request(url, options);
    }
  }

  return (
    <section className='animeLeft'>
      <Head title="Perdeu a senha?" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ?
        <p style={{ color: '#4c1' }}>{data}</p>
        :
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />
          {loading ? <Button disabled>Enviando..</Button> : <Button>Enviar email</Button>}
        </form>
      }

      <Error error={error} />
    </section>
  )
}