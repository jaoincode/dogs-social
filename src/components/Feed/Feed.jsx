import React, { useEffect, useState } from 'react';
import { FeedModal } from './FeedModal';
import { FeedPhotos } from './FeedPhotos';
import P from 'prop-types';

export const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [pages, setPages] = useState([1])
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    let wait = false;

    const infiniteScroll = () => {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          setPages(pages => [...pages, pages.length + 1])
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 800)
        }
      }
    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);

    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    }
  }, [infinite]);

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}

      {pages.map(page => (
        <FeedPhotos key={page} user={user} page={page} setModalPhoto={setModalPhoto} setInfinite={setInfinite} />
      ))}
    </div>
  )
}

Feed.defaultProps = {
  user: 0
}

Feed.propTypes = {
  user: P.oneOfType([
    P.string.isRequired,
    P.number.isRequired,
  ])
}