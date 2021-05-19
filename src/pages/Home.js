import React from 'react'
import Item from '../components/Item'
import style from './Home.module.css'
import FormContainer from '../components/Newsletter/FormContainer'
import Banner from "../components/Banner";


const Home = ({ items }) => {
    return (
        <div className={style.padding}>
        <Banner title='50% OFF SELECTED SHOES USING PROMO CODE YESPLS'/>

        <div className={style.items}>
            {items.map((item) => (
            <Item key={item.id} item={item} />
            ))}
        </div>
        <FormContainer/>
        </div>
    )
}

export default Home
