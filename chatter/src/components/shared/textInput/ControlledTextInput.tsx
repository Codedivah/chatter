import React from "react";
import {
  Control,
  FieldValues,
  Path,
  FieldErrorsImpl,
  RegisterOptions,
  FieldErrors,
  Controller,
} from "react-hook-form";
import TextInput, { ItextInput } from "./TextInput";

// import { Controller } from "react-hook-form";
// import { OutlinedInputProps } from "./type";
// import OutlinedInput from "./OutlinedInput";
// import { onNumberValidator } from "@/utils/numberFormat";

type OmitTextFied = Omit<
  ItextInput,
  "name" | "error" | "value" | "onChange" | "onBlur" | "ref"
> & {
  subText?: string;
  isNumber?: boolean;
};

export interface IControlledTextInput<TFieldValues extends FieldValues>
  extends OmitTextFied {
  errors?: Partial<FieldErrorsImpl<TFieldValues>>;
  control: Control<TFieldValues, any>;
  name: Path<TFieldValues>;
  rules?: Omit<
    RegisterOptions<TFieldValues, Path<TFieldValues>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}

const ControlledTextInput = <TFormValue extends FieldValues>({
  control,
  name,
  label,
  type,
  rules,
  ...rest
}: IControlledTextInput<TFormValue>) => {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({
        field: { onChange, ref, ...fields },
        fieldState: { error },
      }) => (
        <TextInput
          label={label}
          onChange={onChange}
          error={error?.message}
          type={type}
          {...rest}
          {...fields}
        />
      )}
    />
  );
};

export default ControlledTextInput;
