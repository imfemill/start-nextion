export const configUrl = (data: { body?: object; method: string; endpoint: string }) => {
    const token = localStorage.getItem('Authorization') || 'token';

    const { body, method, endpoint } = data;

    const config: {
        method: string;
        url: string;
        formData: boolean;
        prepareHeaders: (headers: Headers) => Headers;
        body?: object;
        headers?: { [key: string]: string };
    } = {
        method: method,
        url: endpoint,
        formData: true,
        prepareHeaders: (headers: Headers) => {
            headers.set('Content-Type', 'multipart/form-data');
            headers.set('Accept', 'application/json');
            return headers;
        },
        headers: {}
    };

    if (body) {
        config.body = body;
    }

    if (token) {
        config.headers = config.headers || {};
        config.headers['Authorization'] = 'Bearer ' + token;
    }

    return config;
};
