import * as Checkbox from "@radix-ui/react-checkbox";
import * as Label from "@radix-ui/react-label";
import { ReactElement, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import TodoModel from "../models/TodoModel";

interface TodoProps {
    todo: TodoModel;
}

export function Todo(props: TodoProps): ReactElement {
    const { todo } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);

    const [entryText, setEntryText] = useState(todo.entry);
    const [dateText] = useState(todo.date);

    const handleEntryChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setEntryText(event.target.value);
    };

    const handleInputBlur = (): void => {
        if (inputRef.current) {
            inputRef.current.setSelectionRange(0, 0);
        }
    };

    return (
        <form>
            <div className="flex min-w-fit items-center rounded-md bg-white px-2 py-4 dark:bg-black">
                <Checkbox.Root className="mx-2 h-10 w-10 flex-shrink-0 rounded-md bg-primary1 p-2">
                    <Checkbox.Indicator className="flex items-center justify-center">
                        <FaCheck className="text-black" />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <div className="flex flex-grow items-center justify-between">
                    <div className="mx-2 flex-grow flex-col">
                        <Label.Root className="flex text-black dark:text-white">
                            <input
                                className="flex flex-grow cursor-text truncate bg-white text-black outline-none dark:bg-black dark:text-white"
                                ref={inputRef}
                                type="text"
                                value={entryText}
                                onChange={handleEntryChange}
                                onBlur={handleInputBlur}
                            />
                        </Label.Root>
                        <Label.Root className="flex text-sm text-primary2">
                            {dateText}
                        </Label.Root>
                    </div>
                    <div className="mx-2 flex h-10 w-10">
                        <button className="flex h-10 w-10 items-center justify-center rounded-md bg-primary1 p-2 hover:bg-primary2">
                            <FaTrash className="text-black" />
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
