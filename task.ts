export type Task = {
    name: string;
    description: string;
    execute: (...params: any[]) => void;
};
