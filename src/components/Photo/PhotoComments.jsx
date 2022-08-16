import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../UserContext';
import { PhotoCommentsForm } from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';

export const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments)
  const { login } = useContext(UserContext);
  const commentsSection = useRef(null);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments])

  return (
    <>
      <ul ref={commentsSection} className={`${styles.comments} ${props.single ? styles.single : ''}`}>
        {comments.map(comment =>
          <li key={comment.coment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        )}
      </ul>
      {login && <PhotoCommentsForm single={props.single} id={props.id} setComments={setComments} />}
    </>
  )
}