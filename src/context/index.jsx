import { createContext, useState, useEffect } from "react";

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
  const [cartProducts, setCartProducts] = useState([]);

  // Checkout open/close
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const openCheckout = () => setIsCheckoutOpen(true);
  const closeCheckout = () => setIsCheckoutOpen(false);

  //Order
  const [order, setOrder] = useState([]);

  //SearchProducts
  const [search, setSearch] = useState(null);
  console.log(search);

  //GetProducts
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
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
        isCheckoutOpen,
        setIsCheckoutOpen,
        openCheckout,
        closeCheckout,
        order,
        setOrder,
        items,
        setItems,
        search,
        setSearch,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
