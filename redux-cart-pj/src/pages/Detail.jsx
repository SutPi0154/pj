import {
  Badge,
  Button,
  Divider,
  Flex,
  Group,
  Image,
  Paper,
  Rating,
  Text,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavbarBack from "../components/NavbarBack";
import Loading from "../components/Loading";

const Detail = () => {
  const [product, setSinglePd] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [categoryPd, setCategoryPd] = useState([]);

  const { id } = useParams();
  const getSinglePd = async () => {
    const api = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await api.json();

    const sameCategory = await fetch(
      `https://fakestoreapi.com/products/category/${data?.category}`
    );
    const SameCategory = await sameCategory.json();
    console.log(SameCategory);

    setCategoryPd(SameCategory);
    setIsLoading(false);
    console.log(data);
    setSinglePd(data);
  };
  useEffect(() => {
    setIsLoading(true);
    getSinglePd();
  }, [id]);

  if (isLoading) return <Loading />;
  return (
    <>
      <NavbarBack />
      <Flex direction={{xs:"col",sm:'col',lg:"col",xl:"row"}} justify={{ base: "", sm: "", md: "", lg: "", xl: "" }} gap={20}>
        <Paper>
          <Paper shadow={"lg"} p="xl">
            <Image
              mx={"auto"}
              radius="md"
              src={product?.image}
              width={{ xs: 100, md: 200, lg: 100, xl: 100 }}
            />
          </Paper>
          <Flex
            align={"center"}
            justify={"space-evenly"}
            wrap="wrap"
            // gap={''}
            radius="xl"
            mt={30}
          >
            {categoryPd
              ?.filter((item) => item.id !== product.id)
              ?.map((product) => (
                <Paper shadow="xl" key={product.id}>
                  <Link to={`/detail/${product.id}`}>
                    <Image
                      mx={"auto"}
                      p={"md"}
                      src={product.image}
                      height={100}
                    />
                  </Link>
                </Paper>
              ))}
          </Flex>
        </Paper>
        <Paper>
          <Text mt={"md"} color={"#495057"} fz={"lg"} fw={"bold"}>
            {product?.title}
          </Text>
          <Text mt={"md"} color="#343A40">
            {product?.description}
          </Text>

          <Rating
            mt={"md"}
            value={product?.rating?.rate}
            fractions={2}
            readOnly
          />
          {/* <hr color="gray" /> */}
          <Divider my={"md"} />
          <Badge bg={"orange"} style={{ color: "#fff" }}>
            {product.category}
          </Badge>
          <Text mt={"md"}>$ {product.price}</Text>
          <Link to={""}>
            <Button color="orange" mt={"md"}>
              Buy now
            </Button>
          </Link>
        </Paper>
      </Flex>
    </>
  );
};

export default Detail;
