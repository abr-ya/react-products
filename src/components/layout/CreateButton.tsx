import { Button, useDisclosure } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { CreateModal, ProductForm, ProductToRecipeForm, RecipeForm } from "..";
import { IProductCreatePayload } from "@/pages/ProductListPage/productContracts";
import { productApi } from "@/pages/ProductListPage/productApi";
import { useLocation } from "react-router-dom";
import { recipeApi } from "@/pages/recipes/recipeApi";
import { AddIngredientParamsType, IRecipeCreatePayload } from "@/pages/recipes/recipeContracts";

const CreateButton = () => {
  const location = useLocation();
  const pagePath = location.pathname;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [createProductMutation, { isLoading: productCreating }] = productApi.useCreateProductMutation();

  const productCreateHandler = (data: IProductCreatePayload) => {
    console.log("create product:", data);
    createProductMutation(data)
      .unwrap()
      .then((res) => console.log("created: ", res))
      .catch((err) => console.log(err));
  };

  const modalRender = (title: string, isLoading: boolean, form: JSX.Element) => (
    <CreateModal title={title} isOpen={isOpen} onClose={onClose} height="400px" isLoading={isLoading}>
      {form}
    </CreateModal>
  );

  const [createRecipeMutation, { isLoading: recipeCreating }] = recipeApi.useCreateRecipeMutation();

  const recipeCreateHandler = (data: IRecipeCreatePayload) => {
    console.log("create recipe:", data);
    createRecipeMutation(data)
      .unwrap()
      .then((res) => console.log("created: ", res))
      .catch((err) => console.log(err));
  };

  const addProductToRecipeHandler = (data: AddIngredientParamsType) => {
    console.log(data);
  };

  const contentRender = (page: string) => {
    switch (page) {
      case "/products":
        return modalRender(
          "Create Product",
          productCreating,
          <ProductForm onModalApply={productCreateHandler} onModalClose={onClose} />,
        );
      case "/recipes":
        return modalRender(
          "Create Recipe",
          recipeCreating,
          <RecipeForm onModalApply={recipeCreateHandler} onModalClose={onClose} />,
        );
      default:
        if (page.startsWith("/recipes/"))
          return modalRender(
            "Add Product",
            false,
            <ProductToRecipeForm onModalApply={addProductToRecipeHandler} onModalClose={onClose} />,
          );

        return modalRender("Create Modal", false, <span>Нет создания на этой странице</span>);
    }
  };

  return (
    <>
      <Button onClick={onOpen}>
        <PlusSquareIcon fontSize={20} />
      </Button>
      {contentRender(pagePath)}
    </>
  );
};

export default CreateButton;
