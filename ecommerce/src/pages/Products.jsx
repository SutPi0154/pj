import React from "react";
import { useGetProductQuery } from "../redux/api/fakeStoreApi";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const data = useGetProductQuery();
  const pd = data?.data;
  console.log(data);
  return (
    <div>
      <div className=" flex flex-wrap gap-10 justify-center items-center">
        {pd?.map((product) => (
          <ProductCard key={product?.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
