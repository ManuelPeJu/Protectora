import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import { getAllDogs } from '../redux/actions'
import Paginado from '../Pagination/Pagination'


const Dogs = () => {
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.allDogs)
    console.log(allDogs)

    const [currentPage, setCurrentPage] = useState(1)// lo seteamos en 1 para que nuestra página inicial sea 1
    const [dogsPerPage, setDogsPerPage] = useState(9)// con esto seteamos la cantidad de perros que queremos por página
    const indexOfLastDog = currentPage * dogsPerPage // 8
    const indexOfFirstDog = indexOfLastDog - dogsPerPage // 0
    const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog) // pillar solamente el indice del primer y el indice del último
     
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber); 
    };

    useEffect(() => {
        dispatch(getAllDogs());
    },[dispatch])

    return (
        <>  
            <div>
                <div className='Pagination'>
                    <Paginado 
                        dogsPerPage={dogsPerPage}
                        allDogs={allDogs.length}
                        paginado={paginado}
                    />
                </div>
               
			<div className='card-grid'>
			{
						currentDogs.length ?
                        currentDogs && currentDogs.map( el => (
								<Card 
									id={el.id}
									name={el.name} 
									image={el.image} 
									diets={el.diets}
									healthScore={el.healthScore}
									key={el.id}
								/>
							))
						:
						<div className='loading'>
							<h2>Loading...</h2>
						</div>
					}
			</div>
            </div>
        </>
    )
}


export default Dogs