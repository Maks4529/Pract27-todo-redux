import * as yup from 'yup';

export const MESSAGE_VALIDATION_SCHEMS = yup.object({
    message: yup
    .string()
    .trim()
    .min(1)
    .required(),
})