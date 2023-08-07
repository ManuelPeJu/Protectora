import React from "react";

export default function Paginado ({dogsPerPage, allDogs, paginado, currentPage}) {
    const pageNumber = []

    for (let i = 0; i < Math.ceil(allDogs/dogsPerPage); i++) {
        pageNumber.push(i + 1); // para que empiece en 1 no en 0
    } // redondea todos los perros sobre la cantidad de perros que quiero por páginas

    return (
        <nav aria-label="...">
            <ul className="pagination paginado">
                {
                pageNumber.map(number => (
                    <li className={`page-item ${number === currentPage ? 'active' : ''}`} key={number}>
                    <a className="page-link" href="#" onClick={() => paginado(number)}>
                        {number}
                    </a>
                    </li>
                ))
                }
            </ul>
        </nav>
    )
}