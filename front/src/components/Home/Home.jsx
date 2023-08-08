import React from 'react'
import Card from '../Card/Card';


const Home = () => {
    return (
        <>
            <main>
                <section className='d-flex justify-content-center'>         
                        <h1>Doggy's Refuge</h1>
                        <p>¡Bienvenido a nuestra Protectora Canina! Aquí en Doggy's, amamos y protegemos a nuestros amigos peludos. Nuestra misión es proporcionar un hogar amoroso y seguro para perros abandonados y maltratados, así como encontrarles familias que los amen incondicionalmente. Únete a nosotros en esta noble causa y ayúdanos a hacer del mundo un lugar mejor para nuestros fieles compañeros de cuatro patas.</p>
                    
                </section>

                <section className='donacion seccion-oscura'>
                    <div className='container seccion-oscura'>
                        <p>Cualquier ayuda será integramente utilizada para nuestros peludos</p>
                    </div>
                    <div className='container seccion-oscura'>
                        <p>Done aqui!
                        <a href="https://github.com/ManuelPeJu" target="_blank" rel="noopener noreferrer">
                        <i class="bi bi-paypal"></i>
                        </a>
                        </p>
                        
                    </div>
                </section>
                
                <section className="d-flex justify-content-center">
                    <div className='d-flex justify-content-center'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa voluptas aut incidunt quod molestiae animi nesciunt, perferendis deleniti. Maxime quae ducimus aliquid enim praesentium ipsam vitae sit debitis, temporibus possimus.</p>
                    </div>                    
                </section>
            </main>
        </>
    )
}

export default Home;