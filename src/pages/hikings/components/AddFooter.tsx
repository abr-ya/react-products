import { AddEatingModal } from "@/components";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Button, CardFooter, Flex, useDisclosure } from "@chakra-ui/react";
import { IEatingPosition } from "../hikingContracts";

interface IAddFooter {
  position: IEatingPosition;
}

const AddFooter = ({ position }: IAddFooter) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isLoading = false;

  return (
    <CardFooter>
      <Button onClick={onOpen} variant="solid" colorScheme="blue">
        <PlusSquareIcon fontSize={20} />
      </Button>
      <AddEatingModal isOpen={isOpen} onClose={onClose} isLoading={isLoading}>
        <Flex>Здесь должен быть выбор и создание</Flex>
        <Flex>{JSON.stringify(position)}</Flex>
      </AddEatingModal>
    </CardFooter>
  );
};

export default AddFooter;
