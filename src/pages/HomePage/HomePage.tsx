import { InputWithEdit } from "@/components";

const HomePage = () => {
  const saveHandler = (val: string) => {
    console.log(val);
  };

  return (
    <>
      <h1>Home Page</h1>
      <InputWithEdit value="11" onSave={saveHandler} isDigital />
    </>
  );
};

export default HomePage;
