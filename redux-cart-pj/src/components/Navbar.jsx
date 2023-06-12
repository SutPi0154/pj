import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Badge, Button, Flex, Input } from "@mantine/core";
import { BsFillBagFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const [isLoading, setIsLoading] = useState(false);
  const [productLists, setProductLists] = useState([]);
  const [search, setSearch] = useState("");

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

  const filterProduct = productLists.filter((item) =>
    item.title.toLowerCase().includes(search)
  );
  console.log(filterProduct);
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/search", { state: { filterProduct } });
  };
  return (
    <Flex justify={"space-between"} align="center" my={"lg"}>
      <Link underline={"false"} to={"/"}>
        <Button variant={"subtle"} fz={"xl"} color="orange" border={"0px"}>
          Shop
        </Button>
      </Link>
      <form onSubmit={onSubmitHandler}>
        <Input
          styles={(theme) => ({
            input: {
              "&:focus-within": {
                borderColor: theme.colors.orange[7],
              },
            },
          })}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          icon={<BiSearchAlt />}
          placeholder="Your email"
        />
      </form>
      <Link to={"/addToCart"}>
        <Button
          justify={"center"}
          size="md"
          ml="5px"
          variant="outline"
          style={{ border: 0 }}
          pos={"relative"}
        >
          <BsFillBagFill color="orange" style={{ zIndex: 10 }} size="29px" />
          <Badge
            color={"orange"}
            pos={"absolute"}
            style={{ zIndex: 1 }}
            top={0}
            right={0}
          >
            {cartItems.length}
          </Badge>
        </Button>
      </Link>
    </Flex>
  );
};

export default Navbar;
