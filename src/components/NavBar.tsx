import { ReactElement } from "react";

import { DarkModeToggle } from "./DarkModeToggle";

export function NavBar(): ReactElement {
    return (
        <div className="m-4 flex w-full items-center justify-between p-2">
            <div className="ml-4 text-secondary1">
                <span className="font-monsieur text-3xl">pretty</span>
                <span className="font-kode text-5xl">TODO</span>
            </div>
            <div className="mr-4">
                <DarkModeToggle />
            </div>
        </div>
    );
}
