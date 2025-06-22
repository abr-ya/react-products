import { Button, ModalFooter } from "@chakra-ui/react";

interface IModalFooterWithSubmit {
  onCancel: () => void;
  titleCacel?: string;
  titleConfirm?: string;
}

export const ModalFooterWithSubmit = ({
  onCancel,
  titleCacel = "Отменить",
  titleConfirm = "Подтвердить",
}: IModalFooterWithSubmit) => (
  <ModalFooter>
    <Button variant="solid" mr={3} onClick={onCancel}>
      {titleCacel}
    </Button>
    <Button colorScheme="blue" type="submit">
      {titleConfirm}
    </Button>
  </ModalFooter>
);
