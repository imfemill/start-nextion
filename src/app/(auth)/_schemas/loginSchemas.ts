import { passwordRegex } from '@/lib/constants';
import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup
        .string()
        .required('Please Enter your password')
        .matches(
            passwordRegex,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
        )
});
