import { Card, CardBody, CardHeader, Heading, SimpleGrid, Text, Table, Tbody, Tr, Td } from "@chakra-ui/react";
import { IEating } from "../hikingContracts";
import AddFooter from "./AddFooter";

interface IEatingProps {
  dayNumber: number;
  eatings: IEating[];
  hikingId: string;
  membersTotal: number;
}

const DayEatings = ({ dayNumber, eatings, hikingId, membersTotal }: IEatingProps) => {
  // todo: from Back?!
  const EATING_TIMES = [
    { id: "1", name: "Завтрак" },
    { id: "2", name: "Обед" },
    { id: "3", name: "Ужин" },
    { id: "0", name: "Завтрак" },
  ];

  return (
    <SimpleGrid columns={4} spacing={10}>
      {EATING_TIMES.map((el) => (
        <Card key={el.id}>
          <CardHeader>
            <Heading size="sm">{el.name} </Heading>
          </CardHeader>
          <CardBody>
            {eatings
              .filter((eat) => eat.eatingTime.id == el.id)
              .map((e) => (
                <div key={e.id}>
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
                </div>
              ))}
          </CardBody>
          <AddFooter position={{ hikingId, dayNumber, eatingTimeId: el.id }} />
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default DayEatings;
