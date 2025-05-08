import { passwordRegex } from '@/lib/constants';
import * as yup from 'yup';

export const changePasswordSchema = yup.object().shape({
    currentPassword: yup
        .string()
        .matches(
            passwordRegex,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
        )
        .required('Current Password is required'),
    newPassword: yup
        .string()
        .matches(
            passwordRegex,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
        )
        .required('New Password is required'),
    confirmPassword: yup
        .string()
        .matches(
            passwordRegex,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
        )
        .required('Confirm Password is required')
        .oneOf([yup.ref('newPassword')], 'Passwords Must Match With New Password')
});
