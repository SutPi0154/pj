import React, { useEffect, useState } from "react";

const FilterCategory = () => {
  const [isLoading, setIsLoading] = useState(false);

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
  console.log(getCategory);
  return <></>;
};

export default FilterCategory;
