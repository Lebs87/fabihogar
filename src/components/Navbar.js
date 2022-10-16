import images from '../assets/images';
import CartWidget from './CartWidget.js';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid ">
                <a className="navbar-brand" href="#">
                    <img src={images[1].img} alt="Logo de FabiHogar" width="120" height="40" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='d-flex justify-content-end'>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="¿Qué estas buscando?" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 start">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Nosotros</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categoría
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Cocina</a></li>
                                    <li><a className="dropdown-item" href="#">Baño</a></li>
                                    <li><a className="dropdown-item" href="#">Limpieza</a></li>
                                    <li><a className="dropdown-item" href="#">Decoración</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                            <CartWidget/>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;