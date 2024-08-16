import { ReactElement, useContext } from "react";

import TodoModel from "../../models/TodoModel";
import { Todo } from "../Todo";
import { TodoListContext } from "./TodoListContext";

export function TodoList(): ReactElement {
    const context = useContext(TodoListContext);

    if (!context) {
        throw new Error("TodoList must be used within a TodoListProvider");
    }

    const { todos, addTodo } = context;

    const handleClickAddTask = () => {
        addTodo(new TodoModel());
    };

    return (
        <>
            <button
                className="text-md mb-4 rounded-md bg-secondary1 p-2 font-semibold text-white hover:bg-secondary2"
                onClick={handleClickAddTask}
            >
                Add task
            </button>
            <div className="mb-4 flex min-w-fit flex-col rounded-2xl bg-primary1 p-4">
                {todos.length > 0 ? (
                    todos.map((todo, index) => {
                        const shouldAddMargin =
                            todos.length > 1 && index !== todos.length - 1;

                        return (
                            <div
                                key={todo.id}
                                className={shouldAddMargin ? "mb-2" : ""}
                            >
                                <Todo todo={todo} />
                            </div>
                        );
                    })
                ) : (
                    <div>No Tasks</div> // change to StateDisplay
                )}
            </div>
        </>
    );
}
