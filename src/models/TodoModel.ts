import { v4 as uuid } from "uuid";

export default class TodoModel {
    id: string;
    entry: string;
    date: string;
    isCompleted: boolean;

    constructor() {
        this.id = uuid();
        this.entry = "";
        this.date = "";
        this.isCompleted = false;
    }
}
