import React from 'react'
import style from './Banner.module.css'

const Banner = ({title, bgcolor, fcolor}) => {
    return (
        <div className={style.header} style={{backgroundColor: bgcolor, color: fcolor}}>
            <p>
                {title}
            </p>
        </div>
    )
}

export default Banner

Banner.defaultProps = {
    bgcolor: 'black', 
    fcolor: 'white',
    title: 'GOLDEN SHOE'

}