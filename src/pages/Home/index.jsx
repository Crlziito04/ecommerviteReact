import { useContext } from "react";
import { Card } from "../../components/Card";
import { ProductDetail } from "../../components/ProductDetail";
import { ShoppingCartContext } from "../../context";

function Home() {
  //OtraForma
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`${apiUrl}/products`);
  //       const data = await response.json();
  //       setItems(data);
  //     } catch (error) {
  //       console.error(`Oh no, ocurrió un error: ${error}`);
  //     }
  //   };
  //   fetchData();
  // }, []);
  //"https://api.escuelajs.co/api/v1/products";
  const context = useContext(ShoppingCartContext);

  return (
    <>
      <h1 className="font-medium text-xl">Exclusive Products</h1>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => context.setSearch(event.target.value)}
      />
      <div className=" grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {context.items?.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
      <ProductDetail />
    </>
  );
}

export { Home };
