import { Flex, Spinner } from "@chakra-ui/react";

const BigBlueSpinner = () => (
  <Flex h="100%" align="center" justify="center">
    <Spinner size="xl" emptyColor="gray.200" color="blue.500" />
  </Flex>
);

export default BigBlueSpinner;
