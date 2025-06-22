import { ProductForm } from "@/components/forms";
import { Button, Modal, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { IProductCreatePayload } from "../ProductListPage/productContracts";

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const submitHandler = (data: IProductCreatePayload) => {
    console.log(data);
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
