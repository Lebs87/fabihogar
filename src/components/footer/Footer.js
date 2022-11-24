import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../assets/images.js'
import Contactanos from './Contactanos.jsx'
import Newsletter from './Newsletter.jsx'
import Publicity from './Publicity.jsx'

const Footer = () => {
    return (
        <>
            <div className='allFooter pt-2'>
                <footer className='container' >
                    <section className='px-2 row row-cols-1 row-cols-md-3'>
                        <article className='col p-2 text-center d-flex flex-column max_height_publicity'>
                            <Publicity />
                        </article>
                        <article className='col px-5 py-2'>
                            <Contactanos />
                        </article>
                        <article className='col p-2'>
                            <Newsletter />
                        </article>
                    </section>
                </footer>
            </div>
            <section className='d-flex justify-content-center align-items-center my-1'>
                <div className='mx-3'>
                    <img src={images[2].img} alt={images[2].title} width="35" height="35" />
                </div>
                <div className='d-flex justify-content-center align-items-center mx-3'>2022</div>
                <Link href="https://lebs87.github.io/Portfolio_Belisario_SASS/" className='d-flex justify-content-center align-items-center devLB' target="blank"><b>Luis Belisario. Developer.</b></Link>
            </section>
        </>
    )
};

export default Footer
