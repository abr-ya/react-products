import { FC, PropsWithChildren } from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

interface ISimpleTabs {
  h?: string;
  titles: string[];
}

const SimpleTabs: FC<PropsWithChildren<ISimpleTabs>> = ({ h = "auto", titles, children }) => (
  <Tabs variant="soft-rounded" colorScheme="green">
    <TabList>
      {titles.map((title) => (
        <Tab key={title}>{title}</Tab>
      ))}
    </TabList>
    <TabPanels h={h} overflowY="auto">
      {Array.isArray(children) ? children.map((child, i) => <TabPanel key={`tab-panel-${i}`}>{child}</TabPanel>) : null}
    </TabPanels>
  </Tabs>
);

export default SimpleTabs;
