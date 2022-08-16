import React, { useState } from 'react';
import { COMMENT_POST } from '../../api';
import Enviar from '../../assets/enviar.svg';
import { useFetch } from '../../hooks/useFetch';
import { Error } from '../Helper/Error';
import styles from './PhotoCommentsForm.module.css'

export const PhotoCommentsForm = ({ id, setComments, single }) => {
  const { request, error } = useFetch();
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { url, options } = await COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options)
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        id="comment"
        name="comment"
        placeholder="Comente..."
      />
      <button className={styles.button}><img src={Enviar} /></button>
      <Error error={error} />
    </form>
  )
}