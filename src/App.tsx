import { ReactElement } from "react";

import { DarkModeToggle } from "./components/DarkModeToggle";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoListProvider } from "./components/TodoList/TodoListContext";

export default function App(): ReactElement {
    return (
        <div className="relative flex min-w-96 flex-col items-center overflow-hidden">
            <div className="absolute right-4 top-4">
                <DarkModeToggle />
            </div>
            <div className="mb-4 mt-16 font-mono text-6xl font-bold text-secondary1">
                TODO
            </div>
            <div className="h-full w-full max-w-4xl px-8">
                <TodoListProvider>
                    <TodoList />
                </TodoListProvider>
            </div>
        </div>
    );
}
