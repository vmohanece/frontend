export const validationMsg = {
    MIN: 8,
    REQUIRED: 'This field is required',
    EMPTY: 'Password field is required',
    VALID_EMAIL: 'Enter a valid email',
    OLD_PASSWORD: 'Old password is required',
    NEW_PASSWORD: 'New password is required',
    CONFORM_PASSWORD: 'Confirm new password is required',
    PASSWORD_MATCH_VALIDATE: 'Passwords must match',
    ACCEPT_TERMS: 'You must agree to terms and conditions and privacy policy.',
    ALPHABETS_ONLY: 'Only alphabets are allowed for this field',
    MIN_VALIDATION: 'Password has to be longer than 8 characters',
};

// eslint-disable-next-line no-useless-escape
export const EMAIL_REGEXP_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
