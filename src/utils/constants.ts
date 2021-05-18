import { ErrorMessage } from './interfaces'

export const LIMIT_LETTERS = 3;

export const ERROR: ErrorMessage = {
    EMPTY: "Поле должно быть заполнено",
    INVALID: "Поле должно содержать минимум 3 буквы",
}

export const CLASSES_COLORS: Array<string> = ["theme-pink", "theme-blue"];