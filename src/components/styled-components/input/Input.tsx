import React, { HTMLInputTypeAttribute, useId, useMemo } from "react";

import { InputBase } from "./components/InputBase";

interface IInputProps<T> {
  type: HTMLInputTypeAttribute;
  name?: string;
  value?: T;
  defaultValue?: T;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  mb?: string;
}

const Input = <T extends string | number>({
  placeholder,
  onChange,
  onBlur,
  onFocus,
  disabled,
  name,
  type,
  value,
  mb,
}: IInputProps<T>) => {
  return (
    <InputBase
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      mb={mb}
    />
  );
};

export default React.memo(Input);
