import { ReactElement } from "react";

interface TaskListProps {
    task: ReactElement;
}

export function TaskList(props: TaskListProps): ReactElement {
    const { task } = props;

    return (
        <div className="min-w-full max-w-2xl rounded-md bg-primary1 p-4">
            {task}
        </div>
    );
}
