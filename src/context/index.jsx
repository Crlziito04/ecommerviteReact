import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  //Cantidad
  const [count, setCount] = useState(0);
  console.log("COUNT: ", count);

  // ProductDetail open/close
  const [productDetailOpen, setProductDetailOpen] = useState(false);
  const openProductDetail = () => setProductDetailOpen(true);
  const closeProductDetail = () => setProductDetailOpen(false);

  //ProductDetail - ShowProduct
  const [productToShow, setProductToShow] = useState({});

  //Car Products -add product to cart
  const [cartProducts, setCartProducts] = useState({});

  // Checkout open/close
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const openCheckout = () => setCheckoutOpen(true);
  const closeCheckout = () => setCheckoutOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        closeProductDetail,
        openProductDetail,
        productDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        checkoutOpen,
        openCheckout,
        closeCheckout,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
