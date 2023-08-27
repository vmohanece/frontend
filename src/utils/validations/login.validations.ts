/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import * as yup from 'yup';

import { EMAIL_REGEXP_PATTERN, validationMsg } from '@/utils/constants/validationMessages.constants';

export const loginValidation = {
    email: yup
        .string()
        .trim(validationMsg.REQUIRED)
        .matches(EMAIL_REGEXP_PATTERN, validationMsg.VALID_EMAIL)
        .required(validationMsg.REQUIRED),
    password: yup.string().trim(validationMsg.REQUIRED).required(validationMsg.REQUIRED)
};
