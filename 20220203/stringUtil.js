'use strict';

const strLength = string => {
    if (typeof string !== 'string') {
        throw new Error('Parameter nem string')
    }
    return string.length;
}

const strTitleCase = string => string[0].toUpperCase() + string.slice(1);

export { strLength, strTitleCase };