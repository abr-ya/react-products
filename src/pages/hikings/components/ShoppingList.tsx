import { BigBlueSpinner, CreateExcel } from "@/components";
import { hikingApi } from "../hikingApi";
import { Code } from "@chakra-ui/react";
import { IHikingProduct } from "../hikingContracts";

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
      <p>Всего в списке {data.length} позиций. Первые 10:</p>
      <Code>{JSON.stringify(data.slice(0, 10))}</Code>
      <CreateExcel<IHikingProduct> data={data} fileName="ShoppingList" />
    </div>
  );
};

export default ShoppingList;
