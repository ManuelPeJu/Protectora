import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-md navbar-ligth">
                <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbar-toggler">
                    <a class="navbar-brand" href="/">
                        <b>Doggy's</b>
                    </a>
                    <ul class="navbar-nav d-flex justify-content-center align-items-start">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href='/Dogs'>Animales</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href='/Donations'>Donaciones</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href='/SobreNosotros'>Sobre nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Contacto">Contacto</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href="/Login">Iniciar Sesión</a>
                    </li>
                    </ul>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar;