import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "./styles.css";

const Checkout = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.checkoutOpen ? "flex" : "hidden"
      } checkout flex-col fixed right-0 border border-black rounded-lg bg-white items-center`}
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
    </aside>
  );
};

export { Checkout };
