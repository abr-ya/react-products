import { FC, PropsWithChildren } from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

interface ISimpleTabs {
  titles: string[];
}

const SimpleTabs: FC<PropsWithChildren<ISimpleTabs>> = ({ titles, children }) => (
  <Tabs variant="soft-rounded" colorScheme="green">
    <TabList>
      {titles.map((title) => (
        <Tab>{title}</Tab>
      ))}
    </TabList>
    <TabPanels>{Array.isArray(children) ? children.map((child) => <TabPanel>{child}</TabPanel>) : null}</TabPanels>
  </Tabs>
);

export default SimpleTabs;
