import { ReactElement } from "react";

import { DarkModeToggle } from "../components/DarkModeToggle";
import { Task } from "../components/Task";
import { TaskList } from "../components/TaskList";

const Home = (): ReactElement => {
    return (
        <div className="relative flex min-h-screen flex-col items-center">
            <div className="my-12 font-mono text-8xl font-bold text-secondary1">
                TODO
            </div>
            <div className="w-full max-w-3xl px-8">
                <button className="mb-4 rounded-md bg-secondary1 p-2 text-xl font-semibold text-white hover:bg-secondary2">
                    Add task
                </button>
                <div className="w-full">
                    <TaskList task={<Task />} />
                </div>
            </div>
            <div className="absolute bottom-4 right-4">
                <DarkModeToggle />
            </div>
        </div>
    );
};

export default Home;
