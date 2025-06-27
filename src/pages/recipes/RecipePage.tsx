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
import { BigBlueSpinner } from "@/components";

const RecipePage = () => {
  const { id } = useParams();

  const { data, isLoading } = recipeApi.useGetRecipeDetailQuery(id as string);

  if (isLoading) return <BigBlueSpinner />;

  if (!data) return <div>Нет данных</div>;

  return (
    <Card>
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
                    <Td>{quantity}</Td>
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
