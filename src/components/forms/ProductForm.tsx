import { FormProvider, type SubmitErrorHandler, type SubmitHandler, useForm, useFormContext } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";

import { defaultValues, productSchema, ProductSchemaType } from "./productFormSchema";
import { RHFInput } from "../rhf";
import { Flex } from "@chakra-ui/react";
import { ModalFooterWithSubmit } from "../modals/ModalFooterWithSubmit";
import { LABELS, PLACEHOLDERS, TEST_MODE } from "./productFormConstants";
import { normalizeProductParams } from "./normalize";
import { IProductCreatePayload } from "@/pages/ProductListPage/productContracts";

interface IProductForm {
  onModalApply(data: IProductCreatePayload): void;
  onModalClose(): void;
}

const ProductForm = ({ onModalApply, onModalClose }: IProductForm) => {
  const { handleSubmit } = useFormContext<ProductSchemaType>();

  const submitHandler: SubmitHandler<ProductSchemaType> = (data) => {
    const normalizedData = normalizeProductParams(data);
    if (TEST_MODE) {
      console.log("submitHandler data", data, normalizedData);
    } else {
      onModalApply(normalizedData);
    }
    onModalClose();
  };

  const errorHandler: SubmitErrorHandler<ProductSchemaType> = (errors) => {
    if (TEST_MODE) console.log("errorHandler errors", errors);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler, errorHandler)}>
      <Flex flexDirection="column" width="400px" mt={3}>
        <RHFInput<ProductSchemaType> name="name" label={LABELS.NAME} placeholder={PLACEHOLDERS.NAME} />
        <RHFInput<ProductSchemaType> name="kkal" label={LABELS.KKAL} type="number" />
        <RHFInput<ProductSchemaType> name="price" label={LABELS.PRICE} type="number" />
      </Flex>
      <ModalFooterWithSubmit onCancel={onModalClose} />
    </form>
  );
};

const ProductFormProvider = (props: IProductForm) => {
  const formMethods = useForm<ProductSchemaType>({
    defaultValues,
    mode: "all",
    resolver: zodResolver(productSchema),
  });

  return (
    <FormProvider {...formMethods}>
      <ProductForm {...props} />
      {TEST_MODE ? <DevTool control={formMethods.control} /> : null}
    </FormProvider>
  );
};

export default ProductFormProvider;
