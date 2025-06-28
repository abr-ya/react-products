import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { hikingApi } from "./hikingApi";
import { BigBlueSpinner } from "@/components";

const HikingPage = () => {
  const { id } = useParams();

  const { data, isLoading } = hikingApi.useGetHikingDetailQuery(id as string);

  if (isLoading) return <BigBlueSpinner />;

  if (!data) return <div>Нет данных</div>;

  const dayNumbers = Array.from({ length: data.daysTotal }, (_, i) => i + 1);

  return (
    <span>
      <Heading>{data.name}</Heading>
      <Tabs variant="enclosed">
        <TabList>
          {dayNumbers.map((day) => (
            <Tab>День {day}</Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </span>
  );
};

export default HikingPage;
