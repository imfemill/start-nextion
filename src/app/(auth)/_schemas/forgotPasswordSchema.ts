import { emailRegex } from '@/lib/constants';
import * as yup from 'yup';

export const forgotPasswordSchema = yup.object().shape({
    email: yup.string().matches(emailRegex, 'Invalid email format').required('Email is required')
});
