import { AddIngredientParamsType } from "@/pages/recipes/recipeContracts";
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm, useFormContext } from "react-hook-form";

import { LABELS, PLACEHOLDERS, TEST_MODE } from "./productToRecipeConstants";
import { ModalFooterWithSubmit } from "../modals/ModalFooterWithSubmit";
import { Flex } from "@chakra-ui/react";
import { defaultValues, productToRecipeFormSchema, ProductToRecipeFormSchemaType } from "./productToRecipeFormSchema";
import { RHFInput, RHFSelectWithSearch } from "../rhf";
import { normalizeAddProductParams, prepareProductToSelect } from "./normalize";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { IProduct } from "@/pages/ProductListPage/productContracts";
import { getProductsAsync } from "@/api";

interface IProductToRecipeForm {
  onModalApply(data: AddIngredientParamsType): void;
  onModalClose(): void;
}

const ProductToRecipeForm = ({ onModalApply, onModalClose }: IProductToRecipeForm) => {
  const { handleSubmit } = useFormContext<ProductToRecipeFormSchemaType>();

  const submitHandler: SubmitHandler<ProductToRecipeFormSchemaType> = (data) => {
    const normalizedData = normalizeAddProductParams(data, "1234"); // todo!!!!!!!
    if (TEST_MODE) {
      console.log("submitHandler data", data, normalizedData);
    } else {
      onModalApply(normalizedData);
    }
  };

  const errorHandler: SubmitErrorHandler<ProductToRecipeFormSchemaType> = (errors) => {
    if (TEST_MODE) console.log("errorHandler errors", errors);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler, errorHandler)}>
      <Flex flexDirection="column" width="400px" mt={3}>
        <RHFSelectWithSearch<ProductToRecipeFormSchemaType, IProduct>
          name="productId"
          label={LABELS.PRODUCT}
          placeholder={PLACEHOLDERS.PRODUCT}
          mapFunc={prepareProductToSelect}
          searchRequest={getProductsAsync}
        />
        <RHFInput<ProductToRecipeFormSchemaType>
          name="quantity"
          label={LABELS.QUANTITY}
          isNumber
          placeholder={PLACEHOLDERS.QUANTITY}
        />
      </Flex>
      <ModalFooterWithSubmit onCancel={onModalClose} />
    </form>
  );
};

const ProductToRecipeFormProvider = (props: IProductToRecipeForm) => {
  const formMethods = useForm<ProductToRecipeFormSchemaType>({
    defaultValues,
    mode: "all",
    resolver: zodResolver(productToRecipeFormSchema),
  });

  return (
    <FormProvider {...formMethods}>
      <ProductToRecipeForm {...props} />
      {TEST_MODE ? <DevTool control={formMethods.control} /> : null}
    </FormProvider>
  );
};

export default ProductToRecipeFormProvider;
