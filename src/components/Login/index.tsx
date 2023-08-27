/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { stringTrim } from '@/utils/helpers/string.helpers';
import { loginValidation } from '@/utils/validations/login.validations';

import Input from '../Shared/Input';

const Login = () => {
    const loginInitialValues = {
        email: '',
        password: ''
    };
    const [loginErr, setLoginErr] = useState("");
    // HookForm
    const validationSchema = Yup.object().shape(loginValidation);
    const {
        control,
        handleSubmit,
        formState: { errors },
        // reset,
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: loginInitialValues,
    });

    // login dispatch
    const onSubmit = useCallback(async (values: any) => {
        const payloadData: any = {
            email: values.email,
            password: values.password
        };
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payloadData)
        };
        await fetch('http://localhost:4000/users/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.status != 200) {
                    setLoginErr(data.message);
                    return;
                }
                window.location.href = '/';
            });
    }, []);

    return (
        <div className="w-full h-screen overflow-y-scroll flex items-center justify-center scrollbar-hide px-8">
            <div className="w-full md:w-96 md:mx-auto bg-white shadow-login px-8 py-6">
                <h1 className="text-xl font-bold py-2 border-b border-gallery-500">Login</h1>
                <form className="py-4 space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { ...field } }) => (
                            <Input
                                {...field}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    if (stringTrim(event.target.value) || event.target.value === '') {
                                        field.onChange(event?.target.value);
                                    }
                                }}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter the email"
                                label="Email Address"
                                className="bg-gallery-500 px-4 py-1.5 text-sm font-normal text-black"
                                error={errors.email?.message}
                            />
                        )}
                    />
                    <div>
                        <Controller
                            control={control}
                            name="password"
                            render={({ field: { ...field } }) => (
                                <Input
                                    {...field}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        if (stringTrim(event.target.value) || event.target.value === '') {
                                            field.onChange(event?.target.value);
                                        }
                                    }}
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter the password"
                                    label="Password"
                                    className="bg-gallery-500 px-4 py-1.5 text-sm font-normal text-black"
                                    error={errors.password?.message}
                                />
                            )}
                        />
                        <a href="#" className="text-[#007BFF] text-sm font-medium">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center h-5">
                            <input
                                id="remember"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:border-1 focus:border-blue-300"
                            />
                        </div>
                        <label htmlFor="remember" className="ml-2 text-base font-medium text-[#495057] cursor-pointer">
                            Remember Me
                        </label>
                    </div>
                    {loginErr && <p className="mt-2.5 text-sm font-medium text-red-500">{loginErr}</p>}
                    <div className="">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-green-500 hover:bg-green-600 mt-2 rounded-sm text-white text-base font-normal"
                        >
                            Login
                        </button>
                        <a href="/register" className="px-2.5 text-[#007BFF] text-sm font-medium">
                            Not Registered Yet ?
                        </a>
                    </div>
                    <div className="">
                        <a href="/" className="text-center px-2.5 text-[#007BFF] text-sm font-medium">
                            Go to Home
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
