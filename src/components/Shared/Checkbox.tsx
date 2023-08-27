import React, { forwardRef } from 'react';

import { ICheckBoxProps } from '@/types/form.types';

const Checkbox = forwardRef<HTMLDivElement, ICheckBoxProps>((props, ref) => {
    const { type, id, name, className, error, label, onChange } = props;
    return (
        <div>
            <div className="flex items-center" ref={ref}>
                <div className="flex items-center h-5">
                    <input
                        aria-label={label}
                        type={type}
                        id={id}
                        name={name}
                        onChange={onChange}
                        className={`w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:border-1 focus:border-blue-300 ${className}`}
                    />
                </div>
                <label htmlFor="remember" className="ml-2 text-base font-medium text-abbey-500 cursor-pointer">
                    Remember Me
                </label>
            </div>
            {error && <p className="text-sm font-medium text-red-500">{error}</p>}
        </div>
    );
});

export default Checkbox;
