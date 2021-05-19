import React from 'react'
import { Link } from 'react-router-dom'

const CartItem = ({
    id,
    product,
    imageID,
    price,
    inventory,
    qty,
    handleChangeQty,
    handleDeleteCartItem

}) => {

    const handleIncrease = () => handleChangeQty(id, 1)
    const handleDecrease = () => handleChangeQty(id, -1)
    const handleDelete = () => handleDeleteCartItem(id)

    return (
        <div className='container mx-auto mb-1' style={{height: '10rem', width:'75%'}} >
          <div className='row'>
          <div className='col-sm-6'>
          <img 
            style={{maxHeight: '8rem', maxWidth: '8rem', objectFit: 'cover'}}
            src={`https://source.unsplash.com/${imageID}/600x700`}
            alt={product}
          />
          </div>
          <div className='card-body col-sm-6 text-right'>
            <Link to={`/shop/${imageID}`}>{product}</Link>
            <p>£{price}</p>
    
            <div>
            <button className='btn btn-sm btn-dark mr-2'onClick={handleDelete}>
                 Remove
              </button>
              <button className='btn btn-sm btn-dark'onClick={handleDecrease} disabled={qty === 1}>
                 -
              </button>
              <span> {qty} </span>
              <button className='btn btn-sm btn-dark' onClick={handleIncrease} disabled={qty === inventory}>+</button>
            </div>
          </div>
          </div>
        </div>
    )
}

export default CartItem

//disabled={qty < 2}
