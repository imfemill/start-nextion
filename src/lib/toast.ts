'use client';

import { toast } from 'react-hot-toast';

export const successToast = (message?: string) => toast.success(message || 'Successfully!');
export const errorToast = (message?: string) => toast.error(message || 'Something went wrong!');
