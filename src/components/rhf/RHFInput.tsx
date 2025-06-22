import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, InputProps } from "@chakra-ui/react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  helpText?: string;
} & InputProps;

export function RHFInput<T extends FieldValues>({ name, label, helpText, ...props }: Props<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <FormControl isInvalid={!!error}>
            <FormLabel>{label}</FormLabel>
            <Input {...field} {...props} />
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
