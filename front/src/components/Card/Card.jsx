import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'



const Card = ({id, image, name}) => {


    return (
        <>
            <div class="card" style={{width: "18rem"}}>
            <img src={image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <a href={id} class="btn btn-primary">+Info</a>
            </div>
            </div>
        </>
    )
}


export default Card;



