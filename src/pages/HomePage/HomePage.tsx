import { ProductForm } from "@/components/forms";
import { Button, Modal, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { IProductCreatePayload } from "../ProductListPage/productContracts";
import { productApi } from "../ProductListPage/productApi";

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [
    createProduct, // This is the mutation trigger
    { isLoading: isCreating }, // You can use the `isLoading` flag, or do custom logic with `status`
  ] = productApi.useCreateProductMutation();

  const submitHandler = (data: IProductCreatePayload) => {
    console.log(data);
    createProduct(data);
  };

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent px={4}>
          <ModalHeader>Modal Title</ModalHeader>
          <ProductForm onModalApply={submitHandler} onModalClose={onClose} />
        </ModalContent>
      </Modal>
    </>
  );
};

export default HomePage;
