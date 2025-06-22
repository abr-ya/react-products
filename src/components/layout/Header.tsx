import { Button, Link as ChakraLink, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { HEIGHT, topMenu } from "@/constants.ts/ui";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const createHandler = () => {
    console.log("create: link or modal");
  };

  return (
    <Flex
      as="header"
      h={`${HEIGHT.header}px`}
      alignItems="center"
      justifyContent="space-between"
      flexDir={{ base: "column", sm: "row" }}
    >
      <Text
        fontSize={{ base: "22", sm: "28" }}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        textAlign={"center"}
        bgGradient={"linear(to-r, cyan.400, blue.500)"}
        bgClip={"text"}
      >
        <ReactRouterLink to={"/"}>Trekking Food 🛒</ReactRouterLink>
      </Text>

      <HStack spacing={5} alignItems={"center"}>
        {topMenu.map(({ path, title }) => (
          <ChakraLink as={ReactRouterLink} key={path} to={path}>
            {title}
          </ChakraLink>
        ))}
      </HStack>

      <HStack spacing={2} alignItems={"center"}>
        <Button onClick={createHandler}>
          <PlusSquareIcon fontSize={20} />
        </Button>
        <Button onClick={toggleColorMode}>{colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}</Button>
      </HStack>
    </Flex>
  );
};

export default Header;
