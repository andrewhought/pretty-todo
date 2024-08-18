import { ReactElement, useContext } from "react";

import TodoModel from "../../models/TodoModel";
import { Todo } from "../Todo";
import { TodoListContext } from "./TodoListContext";

export function TodoList(): ReactElement {
    const context = useContext(TodoListContext);

    if (!context) {
        throw new Error("TodoList must be used within a TodoListProvider");
    }

    const { completionCount, todos, addTodo } = context;

    const handleClickAddTask = () => {
        addTodo(new TodoModel());
    };

    return (
        <>
            <div className="relative mb-6 flex-col rounded-2xl bg-primary1 p-4">
                <button
                    className="text-md mb-4 rounded-md bg-secondary1 px-6 py-2 font-semibold text-white hover:bg-secondary2"
                    onClick={handleClickAddTask}
                >
                    Add task
                </button>
                {todos.length > 0 ? (
                    todos.map((todo, index) => {
                        const shouldAddMargin =
                            todos.length > 1 && index !== todos.length - 1;

                        return (
                            <div
                                key={todo.id}
                                className={`flex-shrink-0 ${shouldAddMargin ? "mb-2" : ""}`}
                            >
                                <Todo todo={todo} />
                            </div>
                        );
                    })
                ) : (
                    <div className="flex h-[76px] w-full min-w-0 items-center justify-center rounded-md bg-white p-4 dark:bg-black">
                        <span className="text-md truncate font-semibold text-black dark:text-white">
                            {completionCount === 0
                                ? "⬆ Complete your first task"
                                : `You have completed ${completionCount} task${completionCount === 1 ? "" : "s"}! 🎉`}
                        </span>
                    </div>
                )}
            </div>
        </>
    );
}
