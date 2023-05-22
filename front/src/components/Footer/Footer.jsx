import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="seccion-oscura d-flex flex-column align-items-center justify-content-center">
            <p class="footer-texto text-center"></p>
            <div class="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
                <a href="https://github.com/ManuelPeJu" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-paypal"></i>
                </a>
                <a href="/Contacto" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-file-text"></i>
                </a>
                <a href="mailto:doggysrefuge@gmail.com" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-envelope"></i>
                </a>
            </div>
            <div class="derechos-de-autor">
                Doggy's refuge &#169;
            </div>
            </footer>
        </div>
    )
}

export default Footer