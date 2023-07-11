import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;
  console.log(totalProducts, totalPrice);

  return (
    <div className="flex flex-row items-center gap-2 border border-black w-80 p-4 rounded-lg mb-4">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">01.2.23</span>
          <span className="font-light">{totalProducts} Articles</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer"></ChevronRightIcon>
        </p>
      </div>
    </div>
  );
};

export { OrdersCard };
