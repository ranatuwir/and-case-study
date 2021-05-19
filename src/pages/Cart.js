import CartItem from '../components/CartItem'
import { useHistory } from 'react-router-dom';
import Promo from '../components/Promo';
import useState from 'react'

const Cart = ({ items, handleChangeQty, handleDeleteCartItem}) => {
    const { goBack } = useHistory();
    const cartItems = items.map((item) => (
      <CartItem
        key={item.id}
        {...item}
        handleChangeQty={handleChangeQty}
        handleDeleteCartItem={handleDeleteCartItem}
      />
    ));
    



    // const [cartTotal,setCartTotal] = useState(
    //   items
    //   .map((item) => item.price * item.qty)
    //   .reduce((a, c) => a + c, 0)
    //   .toFixed(2))

    // const handleDiscount = (x, incID) => {
    //   const discountItems = Number(items
    //   .filter((item) => incID.includes(item.id))
    //   .map((item) => item.price * item.qty *x)
    //   .reduce((a, c) => a + c, 0)
    //   .toFixed(2))

    //   const fullPriceItems = Number(items
    //   .filter((item) => !incID.includes(item.id))
    //   .map((item) => item.price * item.qty)
    //   .reduce((a, c) => a + c, 0)
    //   .toFixed(2))

    //   return setCartTotal(discountItems + fullPriceItems)
    //   }


    let cartTotal =
      items
      .map((item) => item.price * item.qty)
      .reduce((a, c) => a + c, 0)
      .toFixed(2)


    const handleDiscount = (x, incID) => {
      const discountItems = Number(items
      .filter((item) => incID.includes(item.id))
      .map((item) => item.price * item.qty *x)
      .reduce((a, c) => a + c, 0)
      .toFixed(2))

      const fullPriceItems = Number(items
      .filter((item) => !incID.includes(item.id))
      .map((item) => item.price * item.qty)
      .reduce((a, c) => a + c, 0)
      .toFixed(2))

      cartTotal = discountItems + fullPriceItems
      console.log(cartTotal)
      return cartTotal
      }

      
  
    return (
      <div class='container'>
        <h1 className='ml-3'>My Bag</h1>
        <button className='btn btn-sm ml-3 mt-1 btn-dark' onClick={goBack}>
                 Go Back
              </button>
        {items.length > 0 ? (
          <div className='mt-5'>
            <div>{cartItems}</div>
            
            <Promo applyDiscount={handleDiscount}/>
            <div className='ml-3'>
              <h5>
                <span>Sub-Total</span> £{cartTotal}
                {/* {!handleDiscount ? ({cartTotal}): ({discountTotal})} */}
              </h5>
                <button className='btn btn-dark'>Pay Now</button>
            </div>
          </div>
        ) : (
          <div className='m-3'>
            <h5>Your cart is empty</h5>
          </div>
        )}
      </div>
    )
}

export default Cart
