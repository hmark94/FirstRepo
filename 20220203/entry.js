'use strict';

import { strLength, strTitleCase } from "./stringUtil.js";

console.log(strLength('Hello Valami'));
console.log(strTitleCase('Szia Világ'));

try{
    console.log(strTitleCase(3));
} catch(error) {
    console.log(error.message)
}