/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { stringTrim } from '@/utils/helpers/string.helpers';
import { registerValidation } from '@/utils/validations/register.validations';

import Input from '../Shared/Input';

const Register = () => {
    const registerInitialValues = {
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
    };
    const [registerErr, setRegisterErr] = useState("");
    const [registerSuccess, setRegisterSuccess] = useState("");
    // HookForm
    const validationSchema = Yup.object().shape(registerValidation);
    const {
        control,
        handleSubmit,
        formState: { errors },
        // reset,
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: registerInitialValues,
    });

    // login dispatch
    const onSubmit = useCallback(async (values: any) => {
        const payloadData: any = {
            name: values.name,
            email: values.email,
            password: values.password
        };
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payloadData)
        };
        await fetch('http://localhost:4000/users/signup', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.status != 200) {
                    setRegisterErr(data.message);
                    return;
                }
                setRegisterSuccess(data.message);
                window.location.href = '/login';
            });
    }, []);
    return (
        <div className="w-full h-screen overflow-y-scroll flex items-center justify-center scrollbar-hide px-4">
            <div className="w-full md:w-96 md:mx-auto bg-white shadow-login px-8 py-6">
                <h1 className="text-xl font-bold py-2 border-b border-gallery-500">Register</h1>
                <form className="py-4 space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        control={control}
                        name="name"
                        render={({ field: { ...field } }) => (
                            <Input
                                {...field}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    if (stringTrim(event.target.value) || event.target.value === '') {
                                        field.onChange(event?.target.value);
                                    }
                                }}
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter the name"
                                label="Name"
                                className="bg-gallery-500 px-4 py-1.5 text-sm font-normal text-black"
                                error={errors.name?.message}
                            />
                        )}
                    />
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
                    <Controller
                        control={control}
                        name="repeatPassword"
                        render={({ field: { ...field } }) => (
                            <Input
                                {...field}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    if (stringTrim(event.target.value) || event.target.value === '') {
                                        field.onChange(event?.target.value);
                                    }
                                }}
                                type="password"
                                id="repeat-password"
                                name="repeat-password"
                                placeholder="Enter the repeat password"
                                label="Repeat Password"
                                className="bg-gallery-500 px-4 py-1.5 text-sm font-normal text-black"
                                error={errors.repeatPassword?.message}
                            />
                        )}
                    />
                    {registerSuccess && <p className="mt-2.5 text-sm font-medium text-green-500">{registerSuccess}</p>}
                    {registerErr && <p className="mt-2.5 text-sm font-medium text-red-500">{registerErr}</p>}
                    <div className="">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-green-500 hover:bg-green-600 mt-2 rounded-sm text-white text-base font-normal"
                        >
                            Register
                        </button>
                        <a href="/login" className="px-2.5 text-[#007BFF] text-sm font-medium">
                            Already have an account ?
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

export default Register;
