import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading, HStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { hikingApi } from "./hikingApi";
import { BigBlueSpinner } from "@/components";
import DayEatings from "./eatings/DayEatings";

const HikingPage = () => {
  const { id } = useParams();

  const { data, isLoading } = hikingApi.useGetHikingDetailQuery(id as string);

  if (isLoading) return <BigBlueSpinner />;

  if (!data) return <div>Нет данных</div>;

  const dayNumbers = Array.from({ length: data.daysTotal }, (_, i) => i + 1);

  return (
    <span>
      <HStack spacing="24px" alignItems="baseline">
        <Heading>{data.name} </Heading>
        <Heading size="sm">{data.membersTotal} Участников</Heading>
      </HStack>
      <Tabs variant="enclosed">
        <TabList>
          {dayNumbers.map((day) => (
            <Tab key={day}>День {day}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {dayNumbers.map((day) => {
            const eatings = data.eatings.filter((el) => el.dayNumber == day);
            return (
              <TabPanel key={day}>
                <DayEatings eatings={eatings} membersTotal={data.membersTotal} />
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </span>
  );
};

export default HikingPage;
