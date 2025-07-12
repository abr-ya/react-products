import { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading, HStack, Switch, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { hikingApi } from "./hikingApi";
import { BigBlueSpinner } from "@/components";
import DayEatings from "./components/DayEatings";
import ShoppingList from "./components/ShoppingList";

const HikingPage = () => {
  const { id } = useParams();
  const { data, isLoading } = hikingApi.useGetHikingDetailQuery(id as string);
  const [isShoppingMode, setIsShoppingMode] = useState(false);

  if (isLoading) return <BigBlueSpinner />;

  if (!data) return <div>Нет данных</div>;

  const dayNumbers = Array.from({ length: data.daysTotal }, (_, i) => i + 1);

  return (
    <>
      <HStack spacing="24px" alignItems="baseline">
        <Heading>{data.name} </Heading>
        <Heading size="sm">{data.membersTotal} Участников</Heading>
        <Flex gap="12px">
          <Switch id="mode" onChange={(e) => setIsShoppingMode(e.target.checked)} isChecked={isShoppingMode} />
          Show shopping list
        </Flex>
      </HStack>
      {isShoppingMode ? (
        <ShoppingList id={id as string} />
      ) : (
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
                  <DayEatings
                    eatings={eatings}
                    membersTotal={data.membersTotal}
                    dayNumber={day}
                    hikingId={id as string}
                  />
                </TabPanel>
              );
            })}
          </TabPanels>
        </Tabs>
      )}
    </>
  );
};

export default HikingPage;
