import { useState } from "react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Button, CardFooter, Flex, useDisclosure } from "@chakra-ui/react";
import { MultiValue, SingleValue } from "react-select";

import { recipeApi } from "@/pages/recipes/recipeApi";
import { AddEatingModal } from "@/components";
import CustomSelect from "@/components/Select/Select";
import { ICustomSelectValue } from "@/components/Select/interfaces";

import { IEatingPosition } from "../hikingContracts";
import { hikingApi } from "../hikingApi";

interface IAddFooter {
  position: IEatingPosition;
}

const AddFooter = ({ position }: IAddFooter) => {
  const { data: recipes } = recipeApi.useGetRecipesListQuery({ page: 1 });
  const [recipe, setRecipe] = useState<ICustomSelectValue | null>(null);
  const [createEatingMutation, { isLoading }] = hikingApi.useCreateEatingMutation();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const recipeOptions = recipes?.map(({ id, name }) => ({ label: name, value: id }));

  const changeHandler = (value: MultiValue<ICustomSelectValue> | SingleValue<ICustomSelectValue>) => {
    console.log(value);
    setRecipe(value as ICustomSelectValue | null);
  };

  const addHandler = () => {
    if (recipe?.value) {
      console.log("add", recipe?.value, "to", position);
      createEatingMutation({ ...position, recipeId: recipe?.value })
        .unwrap()
        .then((res) => {
          console.log("created: ", res);
          setRecipe(null);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("Нужно выбрать рецепт!"); // по идее кнопка под дизейблом и так!
    }
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
