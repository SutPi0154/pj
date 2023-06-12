import { Badge, Button, Flex, Input, Text } from "@mantine/core";
import React from "react";

import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import SearchChild from "./SearchChild";
import Navbar from "./Navbar";

const Search = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);

  const location = useLocation();
  const searchItem = location.state.filterProduct;
  console.log(searchItem);
  return (
    <>
      <Navbar />
      <Flex justify={"center"} gap={20} wrap={"wrap"}>
        {searchItem.map((item) => (
          <SearchChild key={item.id} item={item} />
        ))}
      </Flex>
    </>
  );
};

export default Search;
