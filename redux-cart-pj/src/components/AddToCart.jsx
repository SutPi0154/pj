import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Button, Flex, Input, Paper, Text } from "@mantine/core";
import AddToCartDetail from "../pages/AddToCartDetail";
import EmptyCart from "../components/EmptyCart";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillBagFill } from "react-icons/bs";
import { SlArrowLeft } from "react-icons/sl";
import { clearAll } from "../features/services/cartSlice";
import Swal from "sweetalert2";

const addToCart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const clearBtn = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#fd7e14",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearAll());
        Swal.fire("Deleted!", "Your carts have been deleted.", "success");
      }
    });
  };

  if (cartItems.length === 0) {
    return (
      <>
        <EmptyCart />
      </>
    );
  }
  return (
    <>
      <Flex justify={{ base: "space-between" }} align="center" my={"lg"}>
        <Flex gap={10} align={"center"}>
          <Link to="/">
            <Button my="md" size="xs" color={"orange"}>
              <SlArrowLeft fontSize={"20px"} />
            </Button>
          </Link>
          <Text fz={"xl"}>Shop</Text>
        </Flex>

        <Input icon={<BiSearchAlt />} placeholder="Your email" />
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
      <Flex
        justify={"space-between"}
        wrap={"wrap"}
        align={"flex-start"}
        gap={20}
      >
        <div style={{ flexGrow: 1 }}>
          {cartItems?.map((item) => (
            <AddToCartDetail key={item.id} item={item} />
          ))}
        </div>
        <Paper withBorder p={"lg"}>
          <Text>TotalAmount - {totalAmount.toFixed(2)}</Text>
          <Button color="orange" mr={10}>
            Prance
          </Button>
          <Button onClick={clearBtn} variant="outline" color={"red"}>
            Clear
          </Button>
        </Paper>
      </Flex>
    </>
  );
};

export default addToCart;
