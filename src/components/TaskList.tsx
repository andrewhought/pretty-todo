import { ReactElement } from "react";

interface TaskListProps {
    task: ReactElement;
}

export function TaskList(props: TaskListProps): ReactElement {
    const { task } = props;

    return <div className="min-w-fit rounded-md bg-primary1 p-4">{task}</div>;
}
