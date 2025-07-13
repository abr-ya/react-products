import { Heading, HStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { hikingApi } from "./hikingApi";
import { BigBlueSpinner, SimpleTabs } from "@/components";
import { PacksByUsers, ProductsByDays, ShoppingList } from "./components";

const HikingPage = () => {
  const { id } = useParams();
  const { data, isLoading } = hikingApi.useGetHikingDetailQuery(id as string);

  if (isLoading) return <BigBlueSpinner />;

  if (!data) return <div>Нет данных</div>;

  const { daysTotal, membersTotal, eatings } = data;
  const TABS = ["Products by Days", "Shopping List", "Packs by Users"];

  return (
    <>
      <HStack spacing="24px" alignItems="baseline" mb={4}>
        <Heading>{data.name} </Heading>
        <Heading size="sm">{membersTotal} Участников</Heading>
      </HStack>
      <SimpleTabs titles={TABS}>
        <ProductsByDays daysTotal={daysTotal} eatings={eatings} hikingId={id as string} membersTotal={membersTotal} />
        <ShoppingList id={id as string} />
        <PacksByUsers daysTotal={daysTotal} eatings={eatings} membersTotal={membersTotal} />
      </SimpleTabs>
    </>
  );
};

export default HikingPage;
