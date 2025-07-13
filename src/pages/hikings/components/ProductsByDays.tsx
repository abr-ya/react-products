import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import { IEating } from "../hikingContracts";
import DayEatings from "./DayEatings";

interface IProductsByDays {
  daysTotal: number;
  eatings: IEating[];
  hikingId: string;
  membersTotal: number;
}

const ProductsByDays = ({ daysTotal, eatings, hikingId, membersTotal }: IProductsByDays) => {
  const dayNumbers = Array.from({ length: daysTotal }, (_, i) => i + 1);

  return (
    <Tabs variant="enclosed" display="flex" my={2}>
      <TabList flexDirection="column">
        {dayNumbers.map((day) => (
          <Tab key={day}>День {day}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {dayNumbers.map((day) => (
          <TabPanel key={day} p={0}>
            <DayEatings
              eatings={eatings.filter((el) => el.dayNumber == day)}
              membersTotal={membersTotal}
              dayNumber={day}
              hikingId={hikingId}
            />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default ProductsByDays;
