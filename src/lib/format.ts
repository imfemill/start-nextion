import dayjs from 'dayjs';

// Format a date to 'MMM dd, yyyy' format
export const formatDate = (date: Date | string): string => {
    return dayjs(date).format('MMM DD, YYYY');
};

// Format a number to currency format
export const formatCurrency = (
    value: number,
    locale: string = 'en-US',
    currency: string = 'USD'
): string => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
    }).format(value);
};

// Capitalize the first letter of a string
export const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// Convert a string to kebab case (e.g., 'helloWorld' => 'hello-world')
export const toKebabCase = (str: string): string => {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

// Format file size in a human-readable format
export const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
};
