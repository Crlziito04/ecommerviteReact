import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "./styles.css";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../utils";

const Checkout = () => {
  const context = useContext(ShoppingCartContext);
  console.log(context.cartProducts);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
    context.setCount(context.count - 1);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "01.02.23",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };
    console.log(orderToAdd);
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setCount(0);
  };

  return (
    <aside
      className={`${
        context.isCheckoutOpen ? "flex" : "hidden"
      } checkout flex-col fixed right-0 border border-black rounded-lg bg-white items-center scrollable-cards`}
    >
      <div className="w-full flex justify-between items-center  p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => context.closeCheckout()}
          ></XMarkIcon>
        </div>
      </div>
      <div className="px-6  flex-1">
        {context.cartProducts.map((prod) => (
          <OrderCard
            key={prod.id}
            id={prod.id}
            title={prod.title}
            image={prod.image}
            price={prod.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      <div className="px-6 w-full mb-6">
        <p className="flex flex-row justify-between items-center">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="w-full bg-black py-3 text-white rounded-lg"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export { Checkout };
