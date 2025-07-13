import { useState } from "react";
import { Heading, HStack, Switch, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { hikingApi } from "./hikingApi";
import { BigBlueSpinner } from "@/components";
import ShoppingList from "./components/ShoppingList";
import ProductsByDays from "./components/ProductsByDays";

const HikingPage = () => {
  const { id } = useParams();
  const { data, isLoading } = hikingApi.useGetHikingDetailQuery(id as string);
  const [isShoppingMode, setIsShoppingMode] = useState(false);

  if (isLoading) return <BigBlueSpinner />;

  if (!data) return <div>Нет данных</div>;

  const { daysTotal, membersTotal, eatings } = data;

  return (
    <>
      <HStack spacing="24px" alignItems="baseline">
        <Heading>{data.name} </Heading>
        <Heading size="sm">{membersTotal} Участников</Heading>
        <Flex gap="12px">
          <Switch id="mode" onChange={(e) => setIsShoppingMode(e.target.checked)} isChecked={isShoppingMode} />
          Show shopping list
        </Flex>
      </HStack>
      {isShoppingMode ? (
        <ShoppingList id={id as string} />
      ) : (
        <ProductsByDays daysTotal={daysTotal} eatings={eatings} hikingId={id as string} membersTotal={membersTotal} />
      )}
    </>
  );
};

export default HikingPage;
