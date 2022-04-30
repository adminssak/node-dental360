/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as generatePassword from "password-generator";

export function generateLocalPassword () {
    // const password = generatePassword(7, false);
    const password = '123456'
    return password;
}

export function generateOtp () {
    const password = generatePassword(4, false);
    return password;
}