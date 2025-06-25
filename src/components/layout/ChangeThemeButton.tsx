import { Button, useColorMode } from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const ChangeThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return <Button onClick={toggleColorMode}>{colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}</Button>;
};

export default ChangeThemeButton;
