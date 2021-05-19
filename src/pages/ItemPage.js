import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import style from './ItemPage.module.css'
import {AiOutlineQuestion} from 'react-icons/ai'


const ItemPage = ({ item, handleAddToCart }) => {
  const [showGoToCart, setshowGoToCart] = useState(false);
  const { goBack } = useHistory();

  const handleAdd = () => {
    setshowGoToCart(true);
    handleAddToCart(item, 1);
  };

  // {item.iventory === 0 ? true : false}

  return (
    <div>
    <div className='row justify-content-center'>
      <div className='col-sm-5 align-self-center'>
      <img className={style.image}
        src={`https://source.unsplash.com/${item.imageID}/600x700`}
        alt={item.product}
      />
      </div>
      <div className='col-sm-4 align-self-center'>
        <div className={style.info}>
          <h1>{item.product}</h1>
          <p>£{item.price.toFixed(2)}</p>

          <div className={style.buttons}>
          <button onClick={handleAdd} className={style.btn} disabled={item.inventory === item.qty}>
          {item.inventory > 0 ? 'Add to cart' : 'Out of Stock'}
          </button>

          {showGoToCart && (
            <Link to="/cart">
              <button  className={style.btn} >Go to Cart</button>
            </Link>
          )}

          <button  className={style.btn} onClick={goBack}>
                 Go Back
          </button>
          </div>
        </div>
      </div>
    </div>
    <Link  style={{ textDecoration: 'none'}} to="/faq">
    <div style={{backgroundColor: 'black', color: 'white', width: '50%'}} class='card align-items-center mx-auto justify-content-center m-4 p-2'>
      Shipping and Returns Info<AiOutlineQuestion />
      </div>
      </Link>
    
    </div>
  );
}

export default ItemPage;