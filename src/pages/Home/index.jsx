import { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { ProductDetail } from "../../components/ProductDetail";

function Home() {
  const [items, setItems] = useState(null);

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
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <>
      <p>home</p>
      <div className=" grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
      <ProductDetail />
    </>
  );
}

export { Home };
