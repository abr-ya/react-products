import AsyncSelect from "react-select/async";

import { InputWithEdit, SelectWithSearch } from "@/components";
import axios from "axios";
import { foodUrl, getProductsAsync } from "@/api";
import { IProduct } from "../ProductListPage/productContracts";

const HomePage = () => {
  const TEST_MODE = true;

  const saveHandler = (val: string) => {
    console.log(val);
  };

  const getProducts = (inputValue: string) => {
    return axios.get(`${foodUrl}ingredients?like=${inputValue}`).then((res) => {
      if (TEST_MODE) console.log(res);
      const options = res.data.map(({ id, name }: IProduct) => ({ label: name, value: id }));
      if (TEST_MODE) console.log(options);

      return options;
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const clgHandler = (data: any) => {
    console.log(data);
  };

  const mapFunc = ({ id, name }: IProduct) => ({ label: name, value: id });

  return (
    <>
      <h1>Home Page</h1>
      <h2>InputWithEdit</h2>
      <InputWithEdit value="11" onSave={saveHandler} isDigital />
      <h2>Products == AsyncSelect</h2>
      <AsyncSelect
        cacheOptions
        loadOptions={getProducts}
        placeholder="Start typing"
        noOptionsMessage={({ inputValue }) =>
          inputValue ? "There aren't items for this request" : "Start typing for search"
        }
      />
      <h2>Wrapper == SelectWithSearch</h2>
      <SelectWithSearch<IProduct> onChange={clgHandler} searchRequest={getProductsAsync} mapFunc={mapFunc} />
    </>
  );
};

export default HomePage;
