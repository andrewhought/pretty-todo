import { createContext, useState } from "react";

import TodoListModel from "../../models/TodoListModel";
import TodoModel from "../../models/TodoModel";

interface TodoListContextType {
    completionCount: number;
    todos: TodoModel[];

    addTodo(newTodo: TodoModel): void;
    editTodo(todo: TodoModel): void;
    deleteTodo(todo: TodoModel): void;
    changeCompletionStatus(todo: TodoModel): void;
    incrementCompletionCount(): void;
}

export const TodoListContext = createContext<TodoListContextType | undefined>(
    undefined
);

export const TodoListProvider: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    const [todoListManager] = useState<TodoListModel>(new TodoListModel());
    const [todos, setTodos] = useState<TodoModel[]>(todoListManager.getTodos());
    const [completionCount, setCompletionCount] = useState<number>(
        todoListManager.getCompletionCount()
    );

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

    const incrementCompletionCount = (): void => {
        todoListManager.incrementCompletionCount();
        setCompletionCount(todoListManager.getCompletionCount());
    };

    return (
        <TodoListContext.Provider
            value={{
                completionCount,
                todos,
                addTodo,
                editTodo,
                deleteTodo,
                changeCompletionStatus,
                incrementCompletionCount
            }}
        >
            {children}
        </TodoListContext.Provider>
    );
};
