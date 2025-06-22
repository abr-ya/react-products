import { Flex, Spinner, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { productApi } from "./productApi";

const ProductListPage = () => {
  const { data, isLoading } = productApi.useGetProductsListQuery({ page: 1 });
  const TITLES = ["Ингредиент", "Ккал", "Цена"];

  console.log(isLoading, data);

  if (isLoading) return <Spinner size="xl" emptyColor="gray.200" color="blue.500" />;

  if (!data) return <div>Нет данных</div>;

  return (
    <Flex>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              {TITLES.map((title) => (
                <Th key={title}>{title}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((el) => (
              <Tr key={el.id}>
                <Td>{el.name}</Td>
                <Td>{el.kkal}</Td>
                <Td>{el.price}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default ProductListPage;
