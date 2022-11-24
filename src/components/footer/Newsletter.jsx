import React from 'react'

const Newsletter = () => {
    return (
        <>
            <h3>Suscribíte</h3>
            <p>¡Suscríbite a nuestro correo de noticias para que te mantengas informado de nuestras promociones y ofertas!</p>
            <form className=''>
                <div className='form'>
                    <input type="email" className='form-control' id="newsletter" placeholder="ejemplo@gmail.com" defaultValue="prueba@gmail.com" />
                    <label htmlFor="newsletter"></label>
                </div>
                <button id="btnNewsletter" type="button" className='btn'>Suscribirme</button>
            </form>
        </>
    )
}

export default Newsletter