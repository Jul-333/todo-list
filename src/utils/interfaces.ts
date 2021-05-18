export interface ItemElementInterface {
    id: number;
    text: string;
    isCompleted: boolean;
}

export interface FormInterface {
    handleTodoCreate: (todo: ItemElementInterface) => void;
}

export interface InputInterface {
    error: string | boolean;
}

export interface ItemListInterface {
    todos: ItemElementInterface[],
    handleTodoComplete: (id: number) => void;
    handleTodoDelete: (id: number) => void;
}

export interface ErrorMessage {
    EMPTY: string,
    INVALID: string,
}