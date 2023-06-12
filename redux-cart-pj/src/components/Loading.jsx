import React from "react";
import { Flex, Loader } from "@mantine/core";

const Loading = () => {
  return (
    <>
      <Flex justify={"center"} my={"30%"} h={"100%"} align={"center"}>
        <Loader color="yellow" />
      </Flex>
    </>
  );
};

export default Loading;
