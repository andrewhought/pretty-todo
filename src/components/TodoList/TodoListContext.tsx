import { createContext, useState } from "react";

import TodoListModel from "../../models/TodoListModel";
import TodoModel from "../../models/TodoModel";

interface TodoListContextType {
    todos: TodoModel[];

    addTodo(newTodo: TodoModel): void;
    editTodo(todo: TodoModel): void;
    deleteTodo(todo: TodoModel): void;
    changeCompletionStatus(todo: TodoModel): void;
}

export const TodoListContext = createContext<TodoListContextType | undefined>(
    undefined
);

export const TodoListProvider: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    const [todoListManager] = useState<TodoListModel>(new TodoListModel());
    const [todos, setTodos] = useState<TodoModel[]>(todoListManager.getTodos());

    const addTodo = (newTodo: TodoModel): void => {
        todoListManager.addTodo(newTodo);
        setTodos(todoListManager.getTodos());
    };

    const editTodo = (todo: TodoModel): void => {
        todoListManager.editTodo(todo);
        setTodos(todoListManager.getTodos());
    };

    const deleteTodo = (todo: TodoModel): void => {
        todoListManager.deleteTodo(todo);
        setTodos(todoListManager.getTodos());
    };

    const changeCompletionStatus = (todo: TodoModel): void => {
        todoListManager.changeCompletionStatus(todo);
        setTodos(todoListManager.getTodos());
    };

    return (
        <TodoListContext.Provider
            value={{
                todos,
                addTodo,
                editTodo,
                deleteTodo,
                changeCompletionStatus
            }}
        >
            {children}
        </TodoListContext.Provider>
    );
};
