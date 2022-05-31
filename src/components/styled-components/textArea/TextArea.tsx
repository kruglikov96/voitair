import React, { HTMLInputTypeAttribute } from "react";
import { TextAreaBase } from "./components/TextAreaBase";

interface IInputProps<T> {
  name?: string;
  value?: T;
  defaultValue?: T;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  mb?: string;
  minHeight?: string;
}

const TextArea = <T extends string | number>({
  placeholder,
  onChange,
  onBlur,
  onFocus,
  disabled,
  name,
  value,
  mb,
  minHeight,
}: IInputProps<T>) => {
  return (
    <TextAreaBase
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      mb={mb}
      minHeight={minHeight}
    />
  );
};

export default React.memo(TextArea);
