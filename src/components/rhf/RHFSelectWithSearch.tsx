import { Controller, type FieldValues, type Path, useFormContext } from "react-hook-form";
import { type AxiosResponse } from "axios";

import { SelectWithSearch } from "..";
import { ICustomSelectValue } from "../Select/interfaces";

type Props<T extends FieldValues, Element> = {
  label: string;
  mapFunc: (el: Element) => ICustomSelectValue;
  minForSearch?: number;
  name: Path<T>;
  placeholder?: string;
  searchRequest: (value: string) => Promise<AxiosResponse<Element[]>>;
  testMode?: boolean;
};

export function RHFSelectWithSearch<T extends FieldValues, Element>({
  label,
  mapFunc,
  minForSearch,
  name,
  placeholder,
  searchRequest,
  testMode = false,
}: Props<T, Element>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <SelectWithSearch
          onChange={onChange}
          label={label}
          value={value}
          errorText={error?.message}
          mapFunc={mapFunc}
          minForSearch={minForSearch}
          placeholder={placeholder}
          searchRequest={searchRequest}
          testMode={testMode}
        />
      )}
    />
  );
}
