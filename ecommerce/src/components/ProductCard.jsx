import { Badge, Button, Card, Rating, Text, Tooltip } from "@mantine/core";
import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

const ProductCard = ({ product }) => {
  const [isShow, setIsShow] = useState(true);
  const OnChange = () => {
    setIsShow(!isShow);
  };

  console.log(isShow);
  return (
    <div className=" relative">
      <Card
        shadow="lg"
        style={{ width: "300px" }}
        padding="lg"
        radius="md"
        withBorder
      >
        <Card.Section>
          <img
            src={product?.image}
            className=" h-44 mx-auto p-5"
            // height={160}
            alt="Norway"
          />
        </Card.Section>
        <p className=" select-none absolute top-0 right-3 my-2">
          <AiFillHeart className="text-red-600 hover:text-red-500 text-2xl" />
        </p>
        <Badge className=" bg-orange-600  text-white my-2" variant="light">
          {product.category}
        </Badge>
        <Text weight={500} style={{ transition: "1.5s" }}>
          {isShow === false ? product?.title : product.title.substring(0, 15)}
          <Tooltip color="orange" label="long form">
            <button onClick={OnChange}>{isShow === true ? "..." : null}</button>
          </Tooltip>
        </Text>
        <Text size="sm" className=" mt-2" color="dimmed" truncate>
          {product.description}
        </Text>
        <Rating
          className=" my-2"
          value={product?.rating?.rate}
          fractions={2}
          readOnly
        />
        <Text weight={500} size="xl" color="gray">
          $ {product?.price}
        </Text>
        <Button
          className=" bg-orange-500 hover:bg-orange-600"
          fullWidth
          mt="md"
          radius="md"
        >
          Add to Cart
        </Button>
      </Card>
    </div>
  );
};

export default ProductCard;
