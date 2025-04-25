// Generate a random integer between a min and max value (inclusive)
export const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Check if a string is a valid URL
export const isValidUrl = (url: string): boolean => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
};

// Validate if a given string is a valid UUID
export const isValidUUID = (uuid: string): boolean => {
    const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
    return regex.test(uuid);
};

// Delay function: return a promise that resolves after a given time in ms
export const delay = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

// Convert a query string into an object
export const parseQueryString = (queryString: string): Record<string, string> => {
    const queryParams = new URLSearchParams(queryString);
    const result: Record<string, string> = {};
    queryParams.forEach((value, key) => {
        result[key] = value;
    });
    return result;
};
