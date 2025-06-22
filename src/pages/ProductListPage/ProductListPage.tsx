import { Flex, Spinner } from "@chakra-ui/react";
import { productApi } from "./productApi";

const ProductListPage = () => {
  const { data, isLoading } = productApi.useGetProductsListQuery({ page: 1 });

  console.log(isLoading, data);

  if (isLoading) return <Spinner size="xl" emptyColor="gray.200" color="blue.500" />;

  return <Flex>ProductListPage</Flex>;
};

export default ProductListPage;
