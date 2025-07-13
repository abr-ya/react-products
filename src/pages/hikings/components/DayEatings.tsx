import { Card, CardBody, CardHeader, Heading, SimpleGrid } from "@chakra-ui/react";

import { EATING_TIMES } from "@/constants/ui";

import { IEating } from "../hikingContracts";
import AddFooter from "./AddFooter";
import EatingCard from "./EatingCard";

interface IDayEatings {
  dayNumber: number;
  eatings: IEating[];
  hikingId: string;
  membersTotal: number;
}

const DayEatings = ({ dayNumber, eatings, hikingId, membersTotal }: IDayEatings) => (
  <SimpleGrid columns={4} spacing={10}>
    {EATING_TIMES.map((el) => (
      <Card key={el.id}>
        <CardHeader>
          <Heading size="sm">{el.name} </Heading>
        </CardHeader>
        <CardBody py={0}>
          {eatings
            .filter((eating) => eating.eatingTime.id == el.id)
            .map((eating) => (
              <EatingCard key={eating.id} data={eating} membersTotal={membersTotal} />
            ))}
        </CardBody>
        <AddFooter position={{ hikingId, dayNumber, eatingTimeId: el.id }} />
      </Card>
    ))}
  </SimpleGrid>
);

export default DayEatings;
