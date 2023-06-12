import React from "react";
import { Card, Text, Badge, Button, Group, Rating } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/services/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);

  const addToCartBtn = () => {
    dispatch(addToCart(product));
  };
  const removeFromCartBtn = () => {
    dispatch(removeFromCart(product));
  };
  return (
    <>
      <Card
        shadow="sm"
        style={{ width: "300px" }}
        padding="lg"
        radius="md"
        withBorder
      >
        <Link to={`/detail/${product?.id}`}>
          <img
            src={product.image}
            style={{ margin: "10px auto", display: "block", height: "130px" }}
          />
        </Link>

        <Badge style={{ color: "#fff" }} bg={"orange"} variant="light">
          {product.category}
        </Badge>
        <Text weight={500} mt={"sm"}>
          {product.title.substring(0, 15)}...
        </Text>
        <Text size="sm" mt={"xs"} color="dimmed">
          {product.description.substring(0, 30)}...
        </Text>

        <Group position="" my={"md"}>
          <Rating value={3.5} fractions={2} readOnly />
        </Group>
        <Text fz={"md"}>$ {product.price}</Text>
        {cartItems?.find((item) => item.id === product?.id) ? (
          <Button
            color="red"
            fullWidth
            mt="md"
            radius="md"
            onClick={removeFromCartBtn}
          >
            Remove from Cart
          </Button>
        ) : (
          <Button
            color="orange"
            fullWidth
            mt="md"
            radius="md"
            onClick={addToCartBtn}
          >
            Add to Cart
          </Button>
        )}
      </Card>
    </>
  );
};

export default ProductCard;
