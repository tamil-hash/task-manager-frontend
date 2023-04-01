import { emailRegex } from "./regexPatterns";

export const validateEmail = (email:string) => {
    return emailRegex.test(email);
}