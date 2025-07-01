import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import {
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  HStack,
  IconButton,
  Input,
  useEditableControls,
  useNumberInput,
} from "@chakra-ui/react";

const FLEXPROPS = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

interface IInputWithEdit {
  isDigital?: boolean;
  value: string;
  onSave: (val: string) => void;
}

const EditableControls = () => {
  const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } = useEditableControls();

  return isEditing ? (
    <ButtonGroup justifyContent="center" size="sm">
      <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} aria-label="submitButton" />
      <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} aria-label="cancelButton" />
    </ButtonGroup>
  ) : (
    <Flex justifyContent="center">
      <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} aria-label="editButton" />
    </Flex>
  );
};

const CustomNumberInput = ({ value, onChange }: { onChange: (val: string) => void; value: string }) => {
  const { getInputProps } = useNumberInput({
    step: 1,
    defaultValue: value,
    min: 1,
    max: 100,
    onChange,
  });

  // const inc = getIncrementButtonProps();
  // const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack maxW="80px">
      {/* <Button {...inc}>+</Button> */}
      <Input {...input} as={EditableInput} />
      {/* <Button {...dec}>-</Button> */}
    </HStack>
  );
};

const InputWithEdit = ({ isDigital, value, onSave }: IInputWithEdit) => {
  const changeHandler = (val: string) => {
    console.log(val);
  };

  return (
    <Editable
      textAlign="center"
      defaultValue={value}
      fontSize="l"
      isPreviewFocusable={false}
      {...FLEXPROPS}
      onSubmit={onSave}
    >
      <EditablePreview />
      {isDigital ? <CustomNumberInput value={value} onChange={changeHandler} /> : <Input as={EditableInput} />}
      <EditableControls />
    </Editable>
  );
};

export default InputWithEdit;
