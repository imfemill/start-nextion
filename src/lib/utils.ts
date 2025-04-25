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
