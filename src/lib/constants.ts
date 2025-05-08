export const [PRIMARY, SECONDARY, OUTLINED, ROUNDED]: string[] = [
    'PRIMARY',
    'SECONDARY',
    'OUTLINED',
    'ROUNDED'
];

export const [ASC, DESC] = ['asc', 'desc'];

// Simple email regex
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
// Simple password regex: 8-20 characters of any type
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/;

/**
 * A regular expression pattern that matches valid URLs.
 * The pattern supports both HTTP and HTTPS protocols, and allows for optional
 * subdomains, multiple top-level domains, and query parameters.
 */
export const urlRegex =
    /^(https?:\/\/)(www\.)?[a-z0-9-_]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-_]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
