import { Container, Flex } from "@mantine/core";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productLists, setProductLists] = useState([]);

  const fetchingData = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const data = await api.json();
    setProductLists(data);
    setIsLoading(isLoading);
    console.log(data);
  };
  useEffect(() => {
    fetchingData();
    setIsLoading(!isLoading);
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Navbar />
      <Flex wrap="wrap" gap={20} justify={"center"} align={"center"}>
        {productLists.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </Flex>
    </>
  );
};

export default Products;
