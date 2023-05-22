import React from 'react'
import perro1 from "../CSS/images/pug.jpg"
import perro2 from "../CSS/images/husky.jpg"
import perro3 from "../CSS/images/labrador.jpg"

const CarouselB = () => {
    return (
        <>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={perro1} class="d-block" width="250px" height="250px" alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img src={perro2} class="d-block" width="250px" height="250px" alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img src={perro3} class="d-block" width="250px" height="250px" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}


export default CarouselB;