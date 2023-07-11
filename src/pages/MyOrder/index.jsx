import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { OrderCard } from "../../components/OrderCard";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") index = context.order?.length - 1;

  console.log(index);
  return (
    <div>
      <div className="flex items-center justify-center w-80 relative mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>MyOrder</h1>
      </div>
      <div className="flex flex-col w-80">
        {context.order?.[index]?.products.map((prod) => (
          <OrderCard
            key={prod.id}
            id={prod.id}
            title={prod.title}
            image={prod.image}
            price={prod.price}
          />
        ))}
      </div>
    </div>
  );
}

export { MyOrder };
