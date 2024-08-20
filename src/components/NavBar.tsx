import { ReactElement } from "react";

import { DarkModeToggle } from "./DarkModeToggle";

export function NavBar(): ReactElement {
    return (
        <div className="m-4 flex w-full items-center justify-between p-2">
            <div className="ml-4 text-secondary1">
                <span className="select-none font-monsieur text-2xl">
                    pretty
                </span>
                <span className="select-none font-kode text-5xl font-semibold">
                    TODO
                </span>
            </div>
            <div className="mr-4 flex">
                <DarkModeToggle />
            </div>
        </div>
    );
}
