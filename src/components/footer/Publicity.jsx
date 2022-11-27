import React from 'react'
import images from '../../assets/images.js'

const Publicity = () => {
    return (
        <>
            <h2>FabiHogar</h2>
            <p>¡Visítanos!, ¡Encuentra todo lo que buscas!</p>
            <div className='slider'>
                <ul>
                    <li>
                        <img src={images[3].img} alt={images[3].title}/>
                    </li>
                    <li>
                        <img src={images[4].img} alt={images[4].title}/>
                    </li>
                    <li>
                        <img src={images[5].img} alt={images[5].title}/>
                    </li>
                    <li>
                        <img src={images[6].img} alt={images[6].title}/>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Publicity
