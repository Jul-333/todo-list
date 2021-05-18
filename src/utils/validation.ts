import { ERROR, LIMIT_LETTERS } from "./constants";

export const validation = (text: string): string | boolean => {
    const regex_1 = /^\s*$/;
    const regex_2 = /[а-яА-ЯA-Za-z]+/gi;

    // check empty field
    const isEmpty: boolean = regex_1.test(text);
    if (isEmpty) return ERROR.EMPTY;

    // check the number of characters
    const letters: Array<string> | null = text.match(regex_2);
    const numberLetters: number = letters ? letters.join("").split("").length : 0;
    if (numberLetters < LIMIT_LETTERS) return ERROR.INVALID;

    return false
}