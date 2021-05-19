import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Cart from "./pages/Cart";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Header from './components/Header'
import ItemPage from "./pages/ItemPage";

const App = () => {

  const [products,setProducts] = useState(
    [
      {
          "id":1,
          "product": "Red Vans",
          "imageID" : "a-QH9MAAVNI",
          "price": 40,
          "inventory": 5,
          "qty": 1
      },

      {
          "id":2,
          "product": "Black Nike",
          "imageID" : "LxVxPA1LOVM",
          "price": 60,
          "inventory": 5,
          "qty": 1
      },

      {
          "id":3,
          "product": "Floral Heels",
          "imageID" : "E-0ON3VGrBc",
          "price": 100,
          "inventory": 2,
          "qty": 1
      },

      {
          "id":4,
          "product": "White Stripe Nike",
          "imageID" : "PqbL_mxmaUE",
          "price": 80,
          "inventory": 3,
          "qty": 1
      },

      {
          "id":5,
          "product": "Pink and Grey New Balance",
          "imageID" : "ezdrvzA1hZw",
          "price": 100,
          "inventory": 3,
          "qty": 1
      },

      {
          "id":6,
          "product": "Chunky Acne",
          "imageID" : "94KcLYsihLY",
          "price": 40,
          "inventory": 2,
          "qty": 1
      },

      {
          "id":7,
          "product": "Green Stripe Nike",
          "imageID" : "LgzM6R0ojoE",
          "price": 100,
          "inventory": 2,
          "qty": 1
      },

      {
        "id":8,
        "product": "Black Yeezy",
        "imageID" : "4Scx2VEv6C0",
        "price": 300,
        "inventory": 2,
        "qty": 1
    }
  
]
  )

  const [cartItems, setCartItems] = useState([]); 

  const handleAddToCart = (newItem) => {

    const checkCart = 
      cartItems.map((cartItem) => cartItem.id)
               .includes(newItem.id)

    if (checkCart) {
      handleChangeQty(newItem.id,1)
    }
    else {
      setCartItems([...cartItems, newItem])
    }
  }

  const handleChangeQty = (id, x) => {

    setCartItems(
      cartItems.map(
        (item) => (item.id === id ? { ...item, qty: item.qty + x } : item)
      )
    )
    setProducts(
      products.map(
        (item) => (item.id === id ? { ...item, inventory: item.inventory - x} : item)
      )
      
    )
  }

  const handleDeleteCartItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }
  
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home items={products}/>
        </Route>
        <Route path="/cart">
          <Cart
          items={cartItems}
          handleChangeQty={handleChangeQty}
          handleDeleteCartItem={handleDeleteCartItem}
          />
        </Route>
        <Route path="/faq">
          <Faq/>
        </Route>
        <Route 
          exact path="/products/:imageID" 
          render={({match}) => (
            <ItemPage 
              item={products.find(p => p.imageID === match.params.imageID)}
              handleAddToCart={handleAddToCart}
              />
          )} />  
      </Switch>
    </Router>
  );
};

export default App;