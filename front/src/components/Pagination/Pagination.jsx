import React from "react";

export default function Paginado ({dogsPerPage, allDogs, paginado}) {
    const pageNumber = []

    for (let i = 0; i < Math.ceil(allDogs/dogsPerPage); i++) {
        pageNumber.push(i + 1); // para que empiece en 1 no en 0
    } // redondea todos los perros sobre la cantidad de perros que quiero por páginas

    return (
        <nav className='paginado'>
            <ul>
                { 
                        pageNumber.map(number =>(
                            <button className='pagination-buttons' key={number} onClick={() => paginado(number)}>{number}</button>
                        )) // el map sirve para renderizar por separado, es decir yo le paso el paginado con el numero de páginas
                }
            </ul>
        </nav>
    )
}