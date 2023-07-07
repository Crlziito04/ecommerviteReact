import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "./styles.css";
import { OrderCard } from "../OrderCard";

const Checkout = () => {
  const context = useContext(ShoppingCartContext);
  console.log(context.cartProducts);

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
      <div className="px-6">
        {context.cartProducts.map((prod) => (
          <OrderCard
            key={prod.id}
            title={prod.title}
            image={prod.image}
            price={prod.price}
          />
        ))}
      </div>
    </aside>
  );
};

export { Checkout };
