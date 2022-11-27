import React, { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { dataBase } from '../../services/firebaseConfig';

const Newsletter = () => {
  const [mailNewsLetter, setMailNewsLetter] = useState('1prueba@gmail.com');
  const [procesando, setProcesando] = useState(false);

  const enviarMail = (e) => {
    e.preventDefault()
    setProcesando(true)
    const envioNewsLetter = {
      mailNewsLetter,
      fecha: serverTimestamp(),
    };

    const newsLetterCollection = collection(dataBase, 'newsLetter')

    addDoc(newsLetterCollection, envioNewsLetter)
      .then(() => {
        setMailNewsLetter("");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setProcesando(false)
      });
  };

  const handleMail = (e) => setMailNewsLetter(e.target.value);

  return (
    <>
      <h3>Suscribíte</h3>
      <p>¡Suscríbite a nuestro correo de noticias para que te mantengas informado de nuestras promociones y ofertas!</p>
      <form action="" onSubmit={enviarMail}>
        <div className='form'>
          <input type="email" className='form-control' id='newsletter' placeholder="Email" onChange={handleMail} name="mailNewsLetter" value={mailNewsLetter} />
          <label htmlFor="newsletter"></label>
        </div>
        <button id="btnNewsletter" className='btn'>{procesando ? "Enviando..." : "Suscribirme"}</button>
      </form>
    </>
  )
}

export default Newsletter
