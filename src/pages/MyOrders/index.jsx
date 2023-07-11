import { useContext } from "react";
import { Link } from "react-router-dom";
import { OrdersCard } from "../../components/OrdersCard";
import { ShoppingCartContext } from "../../context";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  console.log(context.order);
  return (
    <div>
      <h1 className="font-medium text-xl text-center mb-3">MyOrders</h1>

      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </div>
  );
}

export { MyOrders };
