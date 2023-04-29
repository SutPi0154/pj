import React, { useState } from "react";
import { SiWebpack } from "react-icons/si";
import { FaServer } from "react-icons/fa";
import { Box, Collapse, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Skills = () => {
  const [click, setClick] = useState(true);
  const [opened, { toggle }] = useDisclosure(false);
  console.log(toggle);

  // const close2 = () => {
  //   open2 ? close() : open();
  // };
  // const [open2, {close2}] = useDisclosure(false);
  // const [opened, { toggle }] = useDisclosure(false);
  // const [opened, { toggle }] = useDisclosure(false);

  return (
    <div className=" my-20 h-screen ">
      <div className=" flex  flex-col items-center ">
        <p className=" text-5xl text-titleColor font-bold">Skills</p>
        <p className=" text-textColor mt-3">My technical level</p>
      </div>
      <div className="flex justify-center gap-5 items-start mt-20 flex-wrap">
        <Box maw={400} mx="auto">
          <Group position="center" mb={5}>
            <div className=" flex justify-start items-center shadow-lg rounded p-2 border-t-textColor gap-2">
              <div>
                <p className=" text-firstColor text-4xl font-bold">{`{ }`}</p>
              </div>
              <div className=" flex justify-between gap-10">
                <div className=" flex-grow">
                  <p className="text-2xl font-bold">Frontend Developer</p>
                  <p className=" text-sm mt-2 text-textColor">
                    More than 2 years
                  </p>
                </div>
                <button
                  onClick={() => {
                    setClick(!click);
                    toggle();
                  }}
                >
                  {click === true ? (
                    <IoIosArrowDown className=" text-xl" />
                  ) : (
                    <IoIosArrowUp className=" text-xl" />
                  )}
                </button>
              </div>
            </div>
          </Group>

          <Collapse
            in={opened}
            transitionDuration={1000}
            transitionTimingFunction="linear"
          >
            <Text>
              <div className=" h-40 bg-firstColor"></div>
            </Text>
          </Collapse>
        </Box>
        <Box maw={400} mx="auto">
          <Group position="center" mb={5}>
            <div className=" flex justify-start items-center shadow-lg rounded p-2 border-t-textColor gap-2">
              <div>
                <p className=" text-firstColor text-4xl font-bold">{`{ }`}</p>
              </div>
              <div className=" flex justify-between gap-10">
                <div className=" flex-grow">
                  <p className="text-2xl font-bold">Frontend Developer</p>
                  <p className=" text-sm mt-2 text-textColor">
                    More than 2 years
                  </p>
                </div>
                <button
                  onClick={() => {
                    setClick(!click);
                    toggle();
                  }}
                >
                  {click === true ? (
                    <IoIosArrowDown className=" text-xl" />
                  ) : (
                    <IoIosArrowUp className=" text-xl" />
                  )}
                </button>
              </div>
            </div>
          </Group>

          <Collapse
            in={opened}
            transitionDuration={1000}
            transitionTimingFunction="linear"
          >
            <Text>
              <div className=" h-40 bg-firstColor"></div>
            </Text>
          </Collapse>
        </Box>
        <Box maw={400} mx="auto">
          <Group position="center" mb={5}>
            <div className=" flex justify-start items-center shadow-lg rounded p-2 border-t-textColor gap-2">
              <div>
                <p className=" text-firstColor text-4xl font-bold">{`{ }`}</p>
              </div>
              <div className=" flex justify-between gap-10">
                <div className=" flex-grow">
                  <p className="text-2xl font-bold">Frontend Developer</p>
                  <p className=" text-sm mt-2 text-textColor">
                    More than 2 years
                  </p>
                </div>
                <button
                  onClick={() => {
                    setClick(!click);
                    toggle();
                  }}
                >
                  {click === true ? (
                    <IoIosArrowDown className=" text-xl" />
                  ) : (
                    <IoIosArrowUp className=" text-xl" />
                  )}
                </button>
              </div>
            </div>
          </Group>

          <Collapse
            in={opened}
            transitionDuration={1000}
            transitionTimingFunction="linear"
          >
            <Text>
              <div className=" h-40 bg-firstColor"></div>
            </Text>
          </Collapse>
        </Box>
      </div>
    </div>
  );
};

export default Skills;
