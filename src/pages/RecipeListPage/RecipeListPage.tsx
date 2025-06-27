import { BigBlueSpinner } from "@/components";
import { Flex, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Tooltip } from "@chakra-ui/react";
import { recipeApi } from "./recipeApi";
import { strCut } from "@/utils/common";

const RecipeListPage = () => {
  const { data, isLoading } = recipeApi.useGetRecipesListQuery({ page: 1 });
  const TITLES = ["Название", "Приготовление"];
  const DESC_CUT = 40;

  if (isLoading) return <BigBlueSpinner />;

  if (!data) return <div>Нет данных</div>;

  const renderDescription = (text: string) => {
    if (text.length <= DESC_CUT) return text;

    return <Tooltip label={text}>{strCut(text, DESC_CUT)}</Tooltip>;
  };

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
            {data.map(({ id, name, description }) => (
              <Tr key={id}>
                <Td>{name}</Td>
                <Td>{renderDescription(description || "")}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default RecipeListPage;
