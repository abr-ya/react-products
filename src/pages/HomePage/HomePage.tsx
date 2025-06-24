import { ProductForm } from "@/components/forms";
import { Button, useDisclosure } from "@chakra-ui/react";
import { IProductCreatePayload } from "../ProductListPage/productContracts";
import { productApi } from "../ProductListPage/productApi";
import { CreateModal } from "@/components";

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [createProduct, { isLoading: isCreating }] = productApi.useCreateProductMutation();

  const submitHandler = (data: IProductCreatePayload) => {
    console.log("create:", data);
    createProduct(data)
      .unwrap()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <CreateModal title="Create Ingridient" isOpen={isOpen} onClose={onClose} height="400px" isLoading={isCreating}>
        <ProductForm onModalApply={submitHandler} onModalClose={onClose} />
      </CreateModal>
    </>
  );
};

export default HomePage;
