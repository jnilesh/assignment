import React from 'react'
import { Link } from 'react-router-dom'
import './Cat.css'

function Cat({cat}) {
    return (
        <Link to={`/category/${cat.id}`} >
        <div className='cat__item'>
            <img src={cat.image} alt=""/>
            <p>{cat.name}</p>
        </div>
        </Link>
    )
}

export default Cat
