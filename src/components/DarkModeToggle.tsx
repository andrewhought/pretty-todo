import * as Toggle from "@radix-ui/react-toggle";
import { ReactElement, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export function DarkModeToggle(): ReactElement {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    const handleClick = () => {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.removeItem("theme");
            setIsDarkMode(false);
            return;
        }
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setIsDarkMode(true);
    };

    return (
        <Toggle.Root
            className="rounded-md bg-primary1 hover:bg-primary2"
            onClick={handleClick}
        >
            {isDarkMode ? (
                <MdDarkMode className="h-12 w-12 p-2 text-black" />
            ) : (
                <MdLightMode className="h-12 w-12 p-2 text-black" />
            )}
        </Toggle.Root>
    );
}
