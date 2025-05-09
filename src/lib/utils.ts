import { errorToast } from './toast';

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
        // Remove all cookies except email and password
        document.cookie.split(';').forEach((cookie) => {
            const cookieName = cookie.split('=')[0].trim();
            if (
                !cookieName.toLowerCase().includes('email') &&
                !cookieName.toLowerCase().includes('password')
            ) {
                document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`;
            }
        });

        // Clear local storage
        localStorage.clear();

        // Clear session storage
        sessionStorage.clear();

        errorToast('Logged out successfully');
        // Reload the page
        // window.location.reload();

        return true;
    } catch (error) {
        console.error('Error clearing storage:', error);
        return false;
    }
};

// Show header of page title
export const getPageTitle = (pathname: string): string => {
    const pageTitleMap: { [key: string]: string } = {
        '/dashboard': 'Dashboard',
        '/profile': 'My Profile',
        '/components/tables': 'Tables',
        '/components/buttons': 'Buttons',
        '/components/forms': 'Forms',
        '/components/forms/form-elements': 'Form Elements',
        '/components/antd': 'Ant Design',
        '/blog': 'Blogs'
    };

    // Handle wildcard routes (e.g., /blog/*)
    if (pathname.startsWith('/blog/')) {
        return 'Blog';
    }

    // Return the title from the map or a default title
    return pageTitleMap[pathname] || 'Title';
};

interface Address {
    address1: string;
    address2: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
    latitude: number;
    longitude: number;
    name: string;
    formatted_address: string;
}

interface Levels {
    level_1: string;
    level_2: string;
    level_3: string;
    level_4: string;
    level_5: string;
    route_name: string;
}

interface AddressComponent {
    types: string[];
    long_name: string;
}

interface Location {
    lat: () => number;
    lng: () => number;
}

export const getAddressComponents = (
    components: AddressComponent[],
    location: Location,
    name: string,
    formatted_address: string
): Address => {
    // Initialize the address object with default values and location data
    const address: Address = {
        address1: name || '',
        address2: '',
        city: '',
        state: '',
        postal_code: '',
        country: '',
        latitude: location?.lat() ?? 0,
        longitude: location?.lng() ?? 0,
        name: name || '',
        formatted_address: formatted_address || ''
    };

    // Initialize levels object to store different sub locality levels
    const levels: Levels = {
        level_1: '',
        level_2: '',
        level_3: '',
        level_4: '',
        level_5: '',
        route_name: ''
    };

    // Process each address component from the Google Maps API response
    components?.forEach((component) => {
        const { types, long_name } = component;

        // Handle route names - combine with location name if different
        if (types?.includes('route')) {
            levels.route_name = long_name === name ? long_name : `${name}, ${long_name}`;
        } else if (!levels.route_name) {
            levels.route_name = name || '';
        }

        // Extract sublocality levels (1 through 5)
        for (let i = 1; i <= 5; i++) {
            if (types?.includes(`sublocality_level_${i}`)) {
                levels[`level_${i}` as keyof Levels] = long_name;
            }
        }

        // Mapping of Google Maps address types to our address object keys
        const addressMapping = {
            locality: 'city',
            administrative_area_level_1: 'state',
            postal_code: 'postal_code',
            country: 'country'
        } as const;

        // Assign values to address object based on the mapping
        Object.entries(addressMapping).forEach(([type, key]) => {
            if (types?.includes(type)) {
                address[key] = long_name;
            }
        });
    });

    // Format address lines based on available sublocality levels
    if (levels.level_5 || levels.level_4) {
        // If higher levels (4 or 5) exist, split address components accordingly
        const address2Parts = [levels.level_3, levels.level_2, levels.level_1].filter(Boolean);
        const address1Parts = [levels.route_name, levels.level_5, levels.level_4].filter(Boolean);

        address.address2 = address2Parts.join(', ');
        address.address1 = address1Parts.join(', ');
    } else {
        // For simpler addresses, use a different grouping
        const address2Parts = [levels.level_3, levels.level_2, levels.level_1].filter(Boolean);

        address.address2 = address2Parts.join(', ');
        address.address1 = levels.route_name;
    }

    return address;
};
