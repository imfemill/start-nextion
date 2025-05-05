// Check if a value is an array
export const isArray = (value: unknown): boolean => {
    return Array.isArray(value);
};

// Get the difference between two arrays (values present in the first array but not the second)
export const arrayDifference = (arr1: unknown[], arr2: unknown[]): unknown[] => {
    return arr1.filter((item) => !arr2.includes(item));
};

// Remove duplicates from an array
export const removeDuplicates = <T>(arr: T[]): T[] => {
    return [...new Set(arr)];
};

// Remove all cookies and clear local storage and session storage
export const flushStorageAndCookies = (): boolean => {
    try {
        // Remove all cookies
        document.cookie.split(';').forEach((cookie) => {
            const cookieName = cookie.split('=')[0].trim();
            document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`;
        });

        // Clear local storage
        localStorage.clear();

        // Clear session storage
        sessionStorage.clear();

        // Reload the page
        window.location.reload();

        return true;
    } catch (error) {
        console.error('Error clearing storage:', error);
        return false;
    }
};
