import { ReactElement } from "react";

import { NavBar } from "./components/NavBar";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoListProvider } from "./components/TodoList/TodoListContext";

export default function App(): ReactElement {
    return (
        <div className="relative flex flex-col items-center">
            <NavBar />
            <div className="h-full w-full px-8">
                <TodoListProvider>
                    <TodoList />
                </TodoListProvider>
            </div>
        </div>
    );
}
