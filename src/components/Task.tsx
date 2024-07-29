import * as Checkbox from "@radix-ui/react-checkbox";
import * as Label from "@radix-ui/react-label";
import { ReactElement } from "react";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

// interface TaskProps {}

export function Task(): ReactElement {
    return (
        <form>
            <div className="flex items-center rounded-md bg-white p-2 dark:bg-black">
                <Checkbox.Root className="mx-2 h-10 w-10 rounded-md bg-primary1 p-2">
                    <Checkbox.Indicator className="flex items-center justify-center">
                        <FaCheck className="text-black" />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <div className="mx-2 flex-col">
                    <Label.Root className="flex text-black dark:text-white">
                        This is a test
                    </Label.Root>
                    <Label.Root className="flex text-primary2">Date</Label.Root>
                </div>
                <div className="mx-2 ml-auto flex">
                    <button className="mx-2 flex h-10 w-10 items-center justify-center rounded-md bg-primary1 p-2 hover:bg-primary2">
                        <FaTrash className="text-black" />
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-md bg-primary1 p-2 hover:bg-primary2">
                        <MdEdit className="text-black" />
                    </button>
                </div>
            </div>
        </form>
    );
}
