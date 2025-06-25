import { Button, PlusSquareIcon } from "@chakra-ui/icons";

const CreateButton = () => {
  const createHandler = () => {
    console.log("create: link or modal");
  };

  return (
    <Button onClick={createHandler}>
      <PlusSquareIcon fontSize={20} />
    </Button>
  );
};

export default CreateButton;
