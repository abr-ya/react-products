import { FC, PropsWithChildren } from "react";
import { Modal, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import BigBlueSpinner from "../BigBlueSpinner";

interface IAddEatingModal {
  isOpen: boolean;
  isLoading?: boolean;
  onClose: () => void;
  height?: string;
}

const AddEatingModal: FC<PropsWithChildren<IAddEatingModal>> = ({ children, onClose, isLoading, isOpen }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent px={4}>
      <ModalHeader>Add Recipe to Hiking Day</ModalHeader>
      {isLoading ? <BigBlueSpinner /> : children}
    </ModalContent>
  </Modal>
);

export default AddEatingModal;
