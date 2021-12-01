import { useLoaderData } from "remix";

export const loader = () => {
  return [{ name: "Pants" }, { name: "Jacket" }];
};

export default function Products() {
  const products = useLoaderData();
  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  );
}
