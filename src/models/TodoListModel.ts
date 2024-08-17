import { STORED_DATA } from "../utils/constants";
import TodoModel from "./TodoModel";

export default class TodoListModel {
    private todos: TodoModel[];

    constructor() {
        this.todos = STORED_DATA;
    }

    getTodos = (): TodoModel[] => {
        return this.todos;
    };

    addTodo = (newTodo: TodoModel) => {
        this.todos = [...this.todos, newTodo];
        localStorage.setItem("data", JSON.stringify(this.todos));
    };

    editTodo = (todo: TodoModel) => {
        const todoIndex = this.todos.findIndex((td) => td.id === todo.id);
        this.todos[todoIndex] = todo;
        localStorage.setItem("data", JSON.stringify(this.todos));
    };

    deleteTodo = (todo: TodoModel) => {
        this.todos = this.todos.filter((td) => td.id !== todo.id);
        localStorage.setItem("data", JSON.stringify(this.todos));
    };

    changeCompletionStatus = (todo: TodoModel) => {
        todo.isCompleted = !todo.isCompleted;
    };
}
