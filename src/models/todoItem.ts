export interface Todo {
    id?: string;
    description: string;
    userId: string;
    completed?: boolean;
    type : string;
}

export interface TodoCollection {
    Documents: Todo[];
}