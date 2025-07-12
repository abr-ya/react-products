import { Button, Flex, Table, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import { IEating } from "../hikingContracts";
import { hikingApi } from "../hikingApi";

interface IEatingCard {
  data: IEating;
  membersTotal: number;
}

const EatingCard = ({ data, membersTotal }: IEatingCard) => {
  const [deleteEatingMutation, { isLoading: isDeleting }] = hikingApi.useDeleteEatingMutation();
  const deleteHandler = () => {
    console.log("delete", data.id);
    deleteEatingMutation(data.id);
  };

  return (
    <Flex direction="column" mb={2}>
      <Flex alignItems="center" justifyContent="space-between">
        <Text>{data.recipe.name}</Text>
        <Button onClick={deleteHandler} variant="solid" colorScheme="red" size="xs" disabled={isDeleting}>
          <DeleteIcon fontSize={15} />
        </Button>
      </Flex>
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
