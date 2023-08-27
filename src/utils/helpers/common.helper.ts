import { COMMON_DATA_TYPES } from '../constants/common.constants';

/**
 * IS_BROWSER
 */

export const IS_BROWSER = typeof window !== 'undefined';

/**
 * IS_SERVER
 */
export const IS_SERVER = typeof window === 'undefined';

// JSON Stringify only
export const convertStringify = (obj: any) => {
    if (obj) {
        return JSON.stringify(obj);
    }
    return '';
};

export const setLocalStorage = (key: string, value: string) => {
    let storageValue = '';
    if (key && IS_BROWSER) {
        if (typeof value !== COMMON_DATA_TYPES.string) {
            storageValue = convertStringify(value);
        } else {
            storageValue = value;
        }

        localStorage.setItem(key, storageValue);
    }
};

export const getLocalStorage = (key: string) => {
    if (key && IS_BROWSER) {
        return localStorage.getItem(key);
    }
    return '';
};

export const removeTags = (str: string) => {
    if (str === null || str === '') {
        return false;
    }
    str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, '');
};

export const limitedString = (value: string, limit: number) => {
    if (value.length > limit) {
        return `${value.substr(0, limit)}...`;
    }
    return value;
};
