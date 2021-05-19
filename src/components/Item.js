import React from 'react'
import { Link } from 'react-router-dom'
import style from './Item.module.css'

const Item = ({ item }) => {

    return (
        <div className={style.item}>
            <Link to={`/products/${item.imageID}`}>
            <img
            src={`https://source.unsplash.com/${item.imageID}/300x400`}
            alt={item.product}
            />
            </Link>
            <div className={style.info}>
            <p>{item.product}</p>
            <p>£{item.price}</p>
            </div>

        </div>
    )
}

export default Item
