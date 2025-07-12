import { Card, CardBody, CardHeader, Heading, SimpleGrid } from "@chakra-ui/react";
import { IEating } from "../hikingContracts";
import AddFooter from "./AddFooter";
import EatingCard from "./EatingCard";

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
    { id: "0", name: "Перекус" },
  ];

  return (
    <SimpleGrid columns={4} spacing={10}>
      {EATING_TIMES.map((el) => (
        <Card key={el.id}>
          <CardHeader>
            <Heading size="sm">{el.name} </Heading>
          </CardHeader>
          <CardBody py={0}>
            {eatings
              .filter((eat) => eat.eatingTime.id == el.id)
              .map((eating) => (
                <EatingCard key={eating.id} data={eating} membersTotal={membersTotal} />
              ))}
          </CardBody>
          <AddFooter position={{ hikingId, dayNumber, eatingTimeId: el.id }} />
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default DayEatings;
