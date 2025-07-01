import { Card, CardBody, CardHeader, Heading, SimpleGrid, Text, Table, Tbody, Tr, Td } from "@chakra-ui/react";
import { IEating } from "../hikingContracts";

interface IEatingProps {
  eatings: IEating[];
  membersTotal: number;
}

const DayEatings = ({ eatings, membersTotal }: IEatingProps) => {
  const EATING_TIMES = ["Завтрак", "Обед", "Ужин", "Перекус"];

  return (
    <SimpleGrid columns={5} spacing={10}>
      {EATING_TIMES.map((el) => (
        <Card key={el}>
          <CardHeader>
            <Heading size="sm">{el} </Heading>
          </CardHeader>
          <CardBody>
            {eatings
              .filter((eat) => eat.eatingTime.name == el)
              .map((e) => {
                return (
                  <span>
                    <Text>{e.recipe.name}</Text>
                    <Table size="sm">
                      <Tbody>
                        {e.recipe.ingredients.map(({ id, ingredient, quantity }) => (
                          <Tr key={id}>
                            <Td>{ingredient.name}</Td>
                            <Td>{quantity * membersTotal}</Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </span>
                );
              })}
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default DayEatings;
