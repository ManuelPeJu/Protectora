import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import { getAllDogs } from '../redux/actions'


const Dogs = () => {
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.allDogs)
    console.log(allDogs)

    useEffect(() => {
        dispatch(getAllDogs());
    },[dispatch])

    return (
        <>
            <div>
               {
                allDogs && allDogs.map((el) => (
                    <Card
                        key={el.id}
                        image={el.image}
                        name={el.name}
                        temperaments= {el.temperament}
                    />
                ))
               }
            </div>
        </>
    )
}


export default Dogs