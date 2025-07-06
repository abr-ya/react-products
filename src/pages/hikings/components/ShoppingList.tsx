import { BigBlueSpinner } from "@/components";
import { hikingApi } from "../hikingApi";
import { Code } from "@chakra-ui/react";

interface IShoppingList {
  id: string;
}

const ShoppingList = ({ id }: IShoppingList) => {
  const { data, isLoading } = hikingApi.useGetHikingShoppingListQuery(id as string);

  if (isLoading) return <BigBlueSpinner />;

  if (!data) return <div>Нет данных</div>;

  return (
    <div>
      <h2>ShoppingList {id} </h2>
      <Code>{JSON.stringify(data)}</Code>
    </div>
  );
};

export default ShoppingList;
