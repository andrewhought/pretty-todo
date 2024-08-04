import { ReactElement } from "react";

import { DarkModeToggle } from "../components/DarkModeToggle";
import { Task } from "../components/Task";
import { TaskList } from "../components/TaskList";

const Home = (): ReactElement => {
    return (
        <div className="relative flex min-h-screen min-w-fit flex-col items-center">
            <div className="absolute right-4 top-4">
                <DarkModeToggle />
            </div>
            <div className="mb-8 mt-20 font-mono text-8xl font-bold text-secondary1">
                TODO
            </div>
            <div className="w-full max-w-4xl px-8">
                <button className="mb-4 rounded-md bg-secondary1 p-2 text-xl font-semibold text-white hover:bg-secondary2">
                    Add task
                </button>
                <div>
                    <TaskList
                        task={
                            <>
                                <Task entry="This is a test" date="01/01/70" />
                            </>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
