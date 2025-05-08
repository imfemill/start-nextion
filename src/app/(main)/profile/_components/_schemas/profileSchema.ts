import { emailRegex } from '@/lib/constants';
import * as yup from 'yup';

export const profileSchema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().matches(emailRegex, 'Invalid email format').required('Email is required'),
    phone: yup.string().required('Phone is required'),
    address: yup.string().required('Address is required'),
    address1: yup.string().required('Address1 is required'),
    address2: yup.string().required('Address2 is required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
    zipCode: yup.string().required('Zip Code is required'),
    country: yup.string().required('Country is required')
});
