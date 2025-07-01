import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Text,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import { recipeApi } from "./recipeApi";
import { BigBlueSpinner, InputWithEdit } from "@/components";

const RecipePage = () => {
  const { id } = useParams();

  const { data, isLoading, isFetching } = recipeApi.useGetRecipeDetailQuery(id as string);
  const [updateProductLinkMutation, { isLoading: linkUpdating }] = recipeApi.useUpdateRecipeIngredientMutation();

  if (isLoading) return <BigBlueSpinner />;

  if (!data) return <div>Нет данных</div>;

  const saveHandlerCreator = (id: string) => (val: string) => {
    const quantity = Number(val);
    console.log(id, quantity);
    updateProductLinkMutation({ quantity, id, recipeID: id });
  };

  return (
    <Card maxW="md">
      <CardHeader>
        <Heading size="md">{data.name}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Приготовление
            </Heading>
            <Text pt="2" fontSize="sm">
              {data.description}
            </Text>
          </Box>
          <Box>
            <Table size="sm" w="500px">
              <Thead>
                <Tr>
                  <Th>Ингредиенты</Th>
                  <Th>Количество (г/чел)</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.ingredients.map(({ id, ingredient, quantity }) => (
                  <Tr key={id}>
                    <Td>{ingredient.name}</Td>
                    <Td>
                      {linkUpdating || isFetching ? (
                        "updating..."
                      ) : (
                        <InputWithEdit onSave={saveHandlerCreator(id)} value={quantity.toString()} />
                      )}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default RecipePage;
