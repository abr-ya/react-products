import { Link as ChakraLink, Flex, HStack, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

import { HEIGHT, topMenu } from "@/constants/ui";
import CreateButton from "./CreateButton";
import ChangeThemeButton from "./ChangeThemeButton";

const Header = () => (
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
      <CreateButton />
      <ChangeThemeButton />
    </HStack>
  </Flex>
);

export default Header;
