import TodoModel from "./TodoModel";

export default class TodoListModel {
    private todos: TodoModel[];

    constructor() {
        this.todos = [];
    }

    getTodos = (): TodoModel[] => {
        return this.todos;
    };

    addTodo = (todo: TodoModel) => {
        this.todos = [...this.todos, todo];
    };

    editTodo = () => {};

    deleteTodo = () => {};

    markAsCompleted = () => {};
}
