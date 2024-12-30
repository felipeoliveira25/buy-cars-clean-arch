'use client';

import React, { forwardRef } from "react";
import { InputContainer } from "./styles";

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: "text" | "password" | "email";
    placeholder?: string;
    hasError?: boolean;
}

export const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
    ({ type, hasError, placeholder, ...rest }, ref) => {
        return (
            <InputContainer
                ref={ref}
                type={type}
                placeholder={placeholder}
                hasError={hasError}
                {...rest}
            />
        );
    }
);

InputForm.displayName = "InputForm";
