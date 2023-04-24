import { FocusEvent, InputHTMLAttributes, useState } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, onFocus, onBlur, ...rest }: IInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const isFilled = rest.value ? true : false;

  const handleOnFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    e.preventDefault();
    setIsFocused(e.isTrusted);
    onFocus && onFocus(e);
  };

  const handleOnBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    e.preventDefault();
    setIsFocused(false);
    onBlur && onBlur(e);
  };

  return (
    <div className={`bg-blue-900 rounded-2xl px-3 py-2 relative cursor-text`}>
      {label && (
        <label
          className={`absolute cursor-text  ${
            isFocused || isFilled
              ? 'text-gray-400 left-3 top-0 text-xs'
              : 'text-gray-300 text-base'
          }`}
          htmlFor={rest.id}
        >
          {label}
        </label>
      )}
      <input
        autoComplete="off"
        className={`outline-none bg-transparent text-gray-200 mt-2 text-sm`}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        {...rest}
      />
    </div>
  );
};
