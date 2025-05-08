import { emailRegex, passwordRegex } from '@/lib/constants';
import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    fullname: yup.string().required('Full Name is required'),
    email: yup.string().matches(emailRegex, 'Invalid email format').required('Email is required'),
    password: yup
        .string()
        .required('Please Enter your password')
        .matches(
            passwordRegex,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
        ),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), undefined], 'The password and its confirm are not the same')
        .matches(
            passwordRegex,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character' //, include lowercase, uppercase, number, and special characters
        )
        .required('Please enter confirm password')
});
