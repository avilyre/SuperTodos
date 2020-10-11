import Todo from "./Todo";

export default interface TodoContextType {
    todos: Todo[],
    deleteEnabled: boolean,
    toggleDelete(toggle: boolean): any,
    addTodo(title: string): any,
    removeTodo(todo: Todo): any,
    toggleTodo(todo: Todo): any
}