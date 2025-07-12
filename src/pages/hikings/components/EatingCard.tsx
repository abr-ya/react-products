import { Flex, Table, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import { IEating } from "../hikingContracts";

interface IEatingCard {
  data: IEating;
  membersTotal: number;
}

const EatingCard = ({ data, membersTotal }: IEatingCard) => {
  return (
    <Flex key={data.id} direction="column" mb={2}>
      <Text>{data.recipe.name}</Text>
      <Table size="sm">
        <Tbody>
          {data.recipe.ingredients.map(({ id, ingredient, quantity }) => (
            <Tr key={id}>
              <Td>{ingredient.name}</Td>
              <Td>{quantity * membersTotal}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
};

export default EatingCard;
