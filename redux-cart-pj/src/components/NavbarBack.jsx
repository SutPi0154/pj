import { Badge, Button, Flex, Input, Text } from "@mantine/core";
import React from "react";
// import { BiSearchAlt } from "react-icons/bi";
import { BsFillBagFill } from "react-icons/bs";
import { SlArrowLeft } from "react-icons/sl";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavbarBack = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  return (
    <div>
      <Flex justify={{ base: "space-between" }} align="center" my={"lg"}>
        <Flex gap={10} align={"center"}>
          <Link to="/">
            <Button my="md" size="xs" color={"orange"}>
              <SlArrowLeft fontSize={"20px"} />
            </Button>
          </Link>
          <Text fz={"xl"}>Shop</Text>
        </Flex>

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
    </div>
  );
};

export default NavbarBack;
