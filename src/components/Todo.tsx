import * as Checkbox from "@radix-ui/react-checkbox";
import * as Label from "@radix-ui/react-label";
import { ReactElement, useContext, useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import TodoModel from "../models/TodoModel";
import { TodoListContext } from "./TodoList/TodoListContext";

interface TodoProps {
    todo: TodoModel;
}

export function Todo(props: TodoProps): ReactElement {
    const context = useContext(TodoListContext);

    if (!context) {
        throw new Error("Todo must be used within a TodoListProvider");
    }

    const {
        editTodo,
        deleteTodo,
        changeCompletionStatus,
        incrementCompletionCount
    } = context;
    const { todo } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);

    const [entryText, setEntryText] = useState(todo.entry);

    const handleEditTodo = (): void => {
        if (inputRef.current) {
            inputRef.current.blur();
        }

        entryText ? editTodo({ ...todo, entry: entryText }) : deleteTodo(todo);
    };

    const handleDeleteTodo = () => {
        deleteTodo(todo);
    };

    const handleChangeCompletionStatus = () => {
        changeCompletionStatus(todo);

        setTimeout(() => {
            if (todo.isCompleted) {
                deleteTodo(todo);
                incrementCompletionCount();
            }
        }, 1500);
    };

    const handleEntryChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setEntryText(event.target.value);
    };

    useEffect(() => {
        const handleTouchEvent = () => {
            if (inputRef.current) {
                inputRef.current.blur();
            }
        };

        window.addEventListener("touchstart", handleTouchEvent);

        return () => {
            window.removeEventListener("touchstart", handleTouchEvent);
        };
    }, []);

    return (
        <form spellCheck="false">
            <div className="flex w-full min-w-0 items-center rounded-md bg-white px-2 py-4 dark:bg-black">
                <Checkbox.Root
                    className="mx-2 h-10 w-10 flex-shrink-0 rounded-md bg-primary1 p-2"
                    onClick={handleChangeCompletionStatus}
                >
                    <Checkbox.Indicator className="flex items-center justify-center">
                        <FaCheck className="text-black" />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <div className="flex min-w-0 flex-grow items-center justify-between">
                    <div className="mx-2 flex min-w-0 flex-grow flex-col">
                        <Label.Root className="flex text-black dark:text-white">
                            <input
                                className="flex-1 cursor-text truncate bg-white text-black outline-none dark:bg-black dark:text-white"
                                ref={inputRef}
                                type="text"
                                value={entryText}
                                onChange={handleEntryChange}
                                onBlur={handleEditTodo}
                                onKeyDown={(
                                    e: React.KeyboardEvent<HTMLInputElement>
                                ) => {
                                    if (
                                        e.key === "Enter" ||
                                        e.key === "Escape" ||
                                        e.key === "Tab"
                                    ) {
                                        (e.target as HTMLInputElement).blur();
                                    }
                                }}
                                autoFocus={entryText === "" ? true : false}
                            />
                        </Label.Root>
                        <Label.Root className="text-sm text-primary2">
                            {typeof todo.date === "string"
                                ? new Date(todo.date).toDateString()
                                : todo.date.toDateString()}
                        </Label.Root>
                    </div>
                    <div className="mx-2 flex h-10 w-10">
                        <button
                            className="flex h-10 w-10 items-center justify-center rounded-md bg-primary1 p-2 hover:bg-primary2"
                            onClick={handleDeleteTodo}
                        >
                            <FaTrash className="text-black" />
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
