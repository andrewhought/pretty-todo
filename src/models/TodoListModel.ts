import {
    STORED_COMPLETED_TODOS_COUNT,
    STORED_TODO_LIST
} from "../utils/constants";
import TodoModel from "./TodoModel";

export default class TodoListModel {
    private completionCount: number;
    private todos: TodoModel[];

    constructor() {
        this.completionCount = STORED_COMPLETED_TODOS_COUNT;
        this.todos = STORED_TODO_LIST;
    }

    getCompletionCount = (): number => {
        return this.completionCount;
    };

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

    incrementCompletionCount = () => {
        this.completionCount = this.completionCount + 1;
        localStorage.setItem("count", this.completionCount.toString());
    };
}
