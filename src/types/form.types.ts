import { InputHTMLAttributes, ReactNode } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: any;
    icon?: any;
    onChange: any;
    iconClassName?: string;
    setShowPassword?: (val: boolean) => void;
    showPassword?: boolean;
}

export interface ICheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    isCustomLabel?: boolean;
    customLabel?: string | ReactNode;
    error?: any;
    icon?: any;
}
