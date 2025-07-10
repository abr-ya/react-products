import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, InputProps } from "@chakra-ui/react";
import { SyntheticEvent } from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { withMask } from "use-mask-input";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  helpText?: string;
  isNumber?: boolean;
} & InputProps;

export function RHFInput<T extends FieldValues>({ name, label, helpText, isNumber, ...props }: Props<T>) {
  const { control } = useFormContext();
  const maskRef = isNumber ? withMask("9[99]") : undefined;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const changeHandler = (e: SyntheticEvent) => {
          const value = (e.target as HTMLInputElement).value.replace("_", "");
          field.onChange(isNumber && value ? Number(value) : value);
        };

        return (
          <FormControl isInvalid={!!error}>
            <FormLabel>{label}</FormLabel>
            <Input {...field} {...props} onChange={changeHandler} ref={maskRef} />
            {!error?.message ? (
              <FormHelperText>{helpText}</FormHelperText>
            ) : (
              <FormErrorMessage>{error?.message}</FormErrorMessage>
            )}
          </FormControl>
        );
      }}
    />
  );
}
