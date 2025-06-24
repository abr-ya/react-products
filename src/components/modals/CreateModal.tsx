import { FC, PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";
import { Modal, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import BigBlueSpinner from "../BigBlueSpinner";

interface ICreateModal {
  title: string;
  isOpen: boolean;
  isLoading?: boolean;
  onClose: () => void;
  height?: string;
}

const CreateModal: FC<PropsWithChildren<ICreateModal>> = ({
  children,
  onClose,
  isLoading,
  isOpen,
  title,
  height = "auto",
}) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent px={4} h={height}>
        <ModalHeader>
          {title} {currentPath}
        </ModalHeader>
        {isLoading ? <BigBlueSpinner /> : children}
      </ModalContent>
    </Modal>
  );
};

export default CreateModal;
