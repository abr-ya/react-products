import { FormProvider, type SubmitErrorHandler, type SubmitHandler, useForm, useFormContext } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";

import { defaultValues, recipeSchema, RecipeSchemaType } from "./recipeFormSchema";
import { RHFInput } from "../rhf";
import { Flex } from "@chakra-ui/react";
import { ModalFooterWithSubmit } from "../modals/ModalFooterWithSubmit";
import { LABELS, PLACEHOLDERS, TEST_MODE } from "./recipeFormConstants";
import { normalizeRecipeParams } from "./normalize";
import { IRecipeCreatePayload } from "@/pages/recipes/recipeContracts";

interface IRecipeForm {
  onModalApply(data: IRecipeCreatePayload): void;
  onModalClose(): void;
}

const RecipeForm = ({ onModalApply, onModalClose }: IRecipeForm) => {
  const { handleSubmit } = useFormContext<RecipeSchemaType>();

  const submitHandler: SubmitHandler<RecipeSchemaType> = (data) => {
    const normalizedData = normalizeRecipeParams(data);
    if (TEST_MODE) {
      console.log("submitHandler data", data, normalizedData);
    } else {
      onModalApply(normalizedData);
    }
    // onModalClose(); // todo: are we need it?!
  };

  const errorHandler: SubmitErrorHandler<RecipeSchemaType> = (errors) => {
    if (TEST_MODE) console.log("errorHandler errors", errors);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler, errorHandler)}>
      <Flex flexDirection="column" width="400px" mt={3}>
        <RHFInput<RecipeSchemaType> name="name" label={LABELS.NAME} placeholder={PLACEHOLDERS.NAME} />
        <RHFInput<RecipeSchemaType> name="description" label={LABELS.DESCRIPTION} placeholder={PLACEHOLDERS.DESCRIPTION} />
      
      </Flex>
      <ModalFooterWithSubmit onCancel={onModalClose} />
    </form>
  );
};

const RecipeFormProvider = (props: IRecipeForm) => {
  const formMethods = useForm<RecipeSchemaType>({
    defaultValues: {
      ...defaultValues,
      userId: "kp_7771f990484240e4a0652b4fb2570611"
    },
    mode: "all",
    resolver: zodResolver(recipeSchema),
  });

  return (
    <FormProvider {...formMethods}>
      <RecipeForm {...props} />
      {TEST_MODE ? <DevTool control={formMethods.control} /> : null}
    </FormProvider>
  );
};

export default RecipeFormProvider;
