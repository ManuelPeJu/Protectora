import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'



const Card = ({id, image, name, temperament}) => {


    return (
        <>
            <div className="card">
                <img src={image} className="card-img-top" alt="img-card" />
                <div className="card-body">
                    <h5 className="card-title"><Link to={`/dogs/${id}`}>{name}</Link></h5>
                    <p className="card-text">{temperament}</p>
                </div>
            </div>
        </>
    )
}


export default Card;