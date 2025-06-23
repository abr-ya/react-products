import { ProductForm } from "@/components/forms";
import { Button, Modal, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { IProductCreatePayload } from "../ProductListPage/productContracts";
import { productApi } from "../ProductListPage/productApi";
import { BigBlueSpinner } from "@/components";

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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent px={4} h="400px">
          <ModalHeader>Create Ingridient</ModalHeader>
          {isCreating ? <BigBlueSpinner /> : <ProductForm onModalApply={submitHandler} onModalClose={onClose} />}
        </ModalContent>
      </Modal>
    </>
  );
};

export default HomePage;
