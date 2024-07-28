import { ReactElement } from "react";

export function Button(): ReactElement {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <button className="bg-slate-600 hover:bg-slate-500 text-white p-1 rounded-md">Click me</button>
        </div>
    );
}
