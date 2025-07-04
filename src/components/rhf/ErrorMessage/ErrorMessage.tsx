import { StyledErrorMessage } from "./ErrorMessage.styles";

interface IErrorMessageProps {
  text: string;
}

const ErrorMessage = (props: IErrorMessageProps) => {
  return <StyledErrorMessage>{props.text}</StyledErrorMessage>;
};

export default ErrorMessage;
