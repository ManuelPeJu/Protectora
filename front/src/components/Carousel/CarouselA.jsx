import React from 'react'
import perro1 from "../CSS/images/pug.jpg"
import perro2 from "../CSS/images/husky.jpg"
import perro3 from "../CSS/images/labrador.jpg"

const CarouselA = () => {
    return (
        <>
           <div id="carouselExample" className="carousel slide">
                <div class="carousel-inner">
                    <div className="carousel-item active">
                    <img src={perro1} className="d-block" width="250px" height="250px" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src={perro2} className="d-block" width="250px" height="250px" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src={perro3} className="d-block" width="250px" height="250px" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default CarouselA;