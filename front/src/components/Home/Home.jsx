import React from 'react'
import CarouselA from '../Carousel/CarouselA';
import CarouselB from '../Carousel/CarouselB';
import Contacto from '../Footer/Footer';

import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
           <Navbar />
          
            <div className='d-flex'>
                <CarouselA />
                <div className='container-fluid'>
                    <h1 className=''>hola</h1>
                </div>
            </div>
            <div>
                <CarouselB ></CarouselB>
            </div>

            <Contacto />
        </div>
    )
}

export default Home;