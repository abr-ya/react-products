import { BigBlueSpinner } from "@/components";
import { Flex, TableContainer, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { recipeApi } from "./recipeApi";

const RecipeListPage = () => {
  const { data, isLoading } = recipeApi.useGetRecipesListQuery({ page: 1 });
  const TITLES = ["Название", "Приготовление"];

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
                <Td>{el.description}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default RecipeListPage;
