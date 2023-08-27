import React, { forwardRef } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ControllerRenderProps } from 'react-hook-form';

import { IInputProps } from '@/types/form.types';

const Input = forwardRef<HTMLDivElement, Partial<ControllerRenderProps & IInputProps>>((props, ref) => {
    // const { id, name, type, placeholder, className, label, error } = props;

    const {
        label,
        type,
        id,
        name,
        className,
        value,
        placeholder,
        error,
        icon,
        onChange,
        autoComplete = 'off',
        iconClassName,
    } = props;

    return (
        <div className="flex flex-col space-y-1" ref={ref}>
            <label htmlFor={id} className="text-abbey-500 text-base font-normal">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                autoComplete={autoComplete}
                onChange={(event) => onChange?.(event)}
                className={`${className} rounded-md outline-none border focus:border focus:bg-transparent focus:border-gallery-500`}
            />
            {error && <p className="mt-2.5 text-sm font-medium text-red-500">{error}</p>}
            {icon && (
                <div className={`${iconClassName || 'absolute right-8 top-4 cursor-pointer'}`} aria-hidden>
                    {icon}
                </div>
            )}
        </div>
    );
});

export default Input;
