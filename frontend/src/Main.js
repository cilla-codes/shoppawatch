import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from './api';

// Components
import Footer from './components/Footer';
import MainWrapper from './components/MainWrapper';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

function Main() {
  const [cart, setCart] = useState({});
  const [quantity, setQuantity] = useState(1);

  const addToCartHandler = async product => {
    if (quantity >= 1) {
      const response = await axios.post(`${api.addItem}`, {
        product_id: product.id,
        quantity
      });

      setCart(response.data);
    }
  };

  const fetchCart = async () => {
    const response = await axios.get(api.cart);

    setCart(response.data);
  };

  const getQuantity = e => {
    setQuantity(e.target.valueAsNumber || e.target.value);
  };

  const increaseQuantity = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    } else if (typeof quantity === 'string') {
      setQuantity(1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const usCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <BrowserRouter>
      <MainWrapper>
        <Navbar cart={cart} />
        <Switch>
          <Route path="/" exact>
            <HomePage
              addToCartHandler={addToCartHandler}
              setQuantity={setQuantity}
              quantity={quantity}
              usCurrency={usCurrency}
            />
          </Route>
          <Route path="/products/:id">
            <ProductPage
              addToCartHandler={addToCartHandler}
              getQuantity={getQuantity}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              setQauntity={setQuantity}
              quantity={quantity}
              usCurrency={usCurrency}
            />
          </Route>
          <Route path="/cart">
            <CartPage cart={cart} setCart={setCart} usCurrency={usCurrency} />
          </Route>
        </Switch>
        <Footer />
      </MainWrapper>
    </BrowserRouter>
  );
}

export default Main;
