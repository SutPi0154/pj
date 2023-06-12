import { Button, CloseButton, Flex, Paper, Text } from "@mantine/core";
import React from "react";
import { useDispatch } from "react-redux";
import {
  addItemsQuantity,
  removeFromCart,
  subItemQuantity,
} from "../features/services/cartSlice";
import Swal from "sweetalert2";

const AddToCartDetail = ({ item }) => {
  const dispatch = useDispatch();
  const OneItemPrice = item.quantity * item.price;

  const removeFormCartBtn = () => {
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
        dispatch(removeFromCart(item));
        Swal.fire("Deleted!", "Your cart has been deleted.", "success");
      }
    });
  };
  return (
    <>
      <Paper shadow={"lg"} p={"lg"} withBorder pos={"relative"}>
        <Flex direction={"column"}>
          <Flex gap={15}  align={"center"}>
            <img src={item?.image} style={{ maxWidth: "150px" }} />
            <div>
              <Text fz={"lg"} m={"0"}>
                {item?.title}
              </Text>
              <Text mt={"md"} fz={"xl"} c={"gray"}>
                ${OneItemPrice}
              </Text>
              <Button.Group mt={"md"}>
                <Button
                  onClick={() => {
                    dispatch(addItemsQuantity(item));
                  }}
                  variant="default"
                >
                  +
                </Button>
                <Button variant="default">{item.quantity}</Button>
                <Button
                  variant="default"
                  onClick={() => {
                    item.quantity > 1 && dispatch(subItemQuantity(item));
                  }}
                >
                  -
                </Button>
              </Button.Group>
            </div>
          </Flex>
        </Flex>

        <CloseButton
          title="Close popover"
          size="xl"
          pos={"absolute"}
          top={0}
          right={5}
          iconSize={20}
          onClick={removeFormCartBtn}
        />
      </Paper>
    </>
  );
};

export default AddToCartDetail;
