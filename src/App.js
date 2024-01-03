import React,{useState} from 'react';
import Header from './Components/Layout/Header';
import ProductManagement from './Components/Shoe/ProductManagement';
import CartProvider from './Components/store/CartProvider';
import Cart from './Components/Cart/Cart';


function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <ProductManagement/>
      </main>
    </CartProvider>
  );
}

export default App;
