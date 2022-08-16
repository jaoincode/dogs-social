import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { APHOTO_GET } from '../../api';
import { useFetch } from '../../hooks/useFetch';
import { Error } from '../Helper/Error';
import { Head } from '../Helper/Head';
import { Loading } from '../Helper/Loading';
import { PhotoContent } from '../Photo/PhotoContent';


export const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = APHOTO_GET(id);
    request(url, options);
  }, [id, request])

  if (error) return <Error />
  if (loading) return <Loading />
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </section>
    )
  else return null;
}