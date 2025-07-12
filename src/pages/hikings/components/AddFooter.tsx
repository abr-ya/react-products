import { AddEatingModal } from "@/components";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Button, CardFooter, Flex, useDisclosure } from "@chakra-ui/react";
import { IEatingPosition } from "../hikingContracts";
import { recipeApi } from "@/pages/recipes/recipeApi";
import CustomSelect from "@/components/Select/Select";
import { ICustomSelectValue } from "@/components/Select/interfaces";
import { MultiValue, SingleValue } from "react-select";
import { useState } from "react";

interface IAddFooter {
  position: IEatingPosition;
}

const AddFooter = ({ position }: IAddFooter) => {
  const { data: recipes } = recipeApi.useGetRecipesListQuery({ page: 1 });
  const [recipe, setRecipe] = useState<ICustomSelectValue | null>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const isLoading = false;

  const recipeOptions = recipes?.map(({ id, name }) => ({ label: name, value: id }));

  const changeHandler = (value: MultiValue<ICustomSelectValue> | SingleValue<ICustomSelectValue>) => {
    console.log(value);
    setRecipe(value as ICustomSelectValue | null);
  };

  const addHandler = () => {
    console.log("add", recipe?.value, "to", position);
    setRecipe(null);
  };

  const closeHandler = () => {
    setRecipe(null);
    onClose();
  };

  return (
    <CardFooter>
      <Button onClick={onOpen} variant="solid" colorScheme="blue">
        <PlusSquareIcon fontSize={20} />
      </Button>
      <AddEatingModal isOpen={isOpen} onClose={closeHandler} isLoading={isLoading}>
        <Flex>
          Добавить в день {position.dayNumber} время {position.eatingTimeId}
        </Flex>
        {recipeOptions ? (
          <CustomSelect onChange={changeHandler} options={recipeOptions} value={recipe} />
        ) : (
          <span>ошибка загрузки рецептов</span>
        )}
        <Button colorScheme="blue" isDisabled={!recipe} mb={4} onClick={addHandler}>
          Add Recipe
        </Button>
      </AddEatingModal>
    </CardFooter>
  );
};

export default AddFooter;
