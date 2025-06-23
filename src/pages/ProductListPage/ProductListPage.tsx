import { Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { productApi } from "./productApi";
import { BigBlueSpinner } from "@/components";

const ProductListPage = () => {
  const { data, isLoading } = productApi.useGetProductsListQuery({ page: 1 });
  const TITLES = ["Ингредиент", "Ккал", "Цена"];

  if (isLoading) return <BigBlueSpinner />;

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
