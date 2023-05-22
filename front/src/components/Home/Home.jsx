import React from 'react'
import CarouselA from '../Carousel/CarouselA';
import CarouselB from '../Carousel/CarouselB';
import Footer from '../Footer/Footer';

import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <>
            <navbar>
                <Navbar />
            </navbar>
            
                <div className='d-flex justify-content-center'>
                    <CarouselA />
                    <div className='d-flex justify-content-center'>
                        <h1>hola</h1>
                    </div>
                </div>
                
                <div className="d-flex justify-content-center">
                    <div className='d-flex justify-content-center'>
                        <h1>hola</h1>
                    </div>
                    <CarouselB />   
                </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Home;