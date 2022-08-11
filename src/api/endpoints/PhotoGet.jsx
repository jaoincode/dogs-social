import { useState } from "react";

export const PhotoGet = () => {
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`)
      .then(r => {
        console.log(r);
        return r.json();
      })
      .then(json => {
        console.log(json);
        return json;
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={id} onChange={({ target }) => setId(target.value)} />
      <button>Enviar</button>
    </form>
  )
}