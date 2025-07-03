import AsyncSelect from "react-select/async";

import { InputWithEdit } from "@/components";
import axios from "axios";
import { foodUrl } from "@/api";
import { IProduct } from "../ProductListPage/productContracts";

const HomePage = () => {
  const TEST_MODE = true;

  const saveHandler = (val: string) => {
    console.log(val);
  };

  const getCountries = (inputValue: string) => {
    return axios.get(`${foodUrl}ingredients?like=${inputValue}`).then((res) => {
      if (TEST_MODE) console.log(res);
      const options = res.data.map(({ id, name }: IProduct) => ({ label: name, value: id }));
      if (TEST_MODE) console.log(options);

      return options;
    });
  };

  return (
    <>
      <h1>Home Page</h1>
      <h2>InputWithEdit</h2>
      <InputWithEdit value="11" onSave={saveHandler} isDigital />
      <h3>Products == AsyncSelect</h3>
      <AsyncSelect
        cacheOptions
        loadOptions={getCountries}
        placeholder="Start typing"
        noOptionsMessage={({ inputValue }) =>
          inputValue ? "There aren't items for this request" : "Start typing for search"
        }
      />
    </>
  );
};

export default HomePage;
