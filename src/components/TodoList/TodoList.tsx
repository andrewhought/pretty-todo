import { AnimatePresence, motion } from "framer-motion";
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

    const todoAnimations = {
        initial: { opacity: 0, y: -40 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 40 }
    };

    const emptyStateAnimations = {
        initial: { opacity: 0, scale: 0.9 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 20,
                mass: 0.1
            }
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 20,
                mass: 0.1
            }
        }
    };

    const handleClickAddTodo = () => {
        const newTodo = new TodoModel();

        addTodo(newTodo);
    };

    return (
        <>
            <AnimatePresence initial={false}>
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-primary1 p-4">
                    <button
                        className="text-md mb-4 rounded-md bg-secondary1 px-6 py-2 font-semibold text-white hover:bg-secondary2"
                        onClick={handleClickAddTodo}
                    >
                        Add todo
                    </button>
                    <div
                        className={
                            "hide-scrollbar flex-grow overflow-x-hidden overflow-y-scroll rounded-md"
                        }
                    >
                        {todos.length > 0 ? (
                            todos.map((todo, index) => {
                                const shouldAddMargin =
                                    todos.length > 1 &&
                                    index !== todos.length - 1;

                                return (
                                    <motion.div
                                        {...todoAnimations}
                                        layout
                                        key={todo.id}
                                        className={`flex-shrink-0 ${shouldAddMargin ? "mb-2" : ""}`}
                                    >
                                        <Todo todo={todo} />
                                    </motion.div>
                                );
                            })
                        ) : (
                            <motion.div
                                {...emptyStateAnimations}
                                className="flex h-full items-center justify-center rounded-md bg-white dark:bg-black"
                            >
                                <span className="text-md font-semibold text-black dark:text-white">
                                    {completionCount === 0
                                        ? "⬆ Complete your first todo"
                                        : `You have completed ${completionCount} todo${completionCount === 1 ? "" : "s"}! 🎉`}
                                </span>
                            </motion.div>
                        )}
                    </div>
                </div>
            </AnimatePresence>
        </>
    );
}
