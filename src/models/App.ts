export class App {
    isCreating: boolean;
    isEditing: boolean;
    isDeleting: boolean;

    constructor() {
        this.isCreating = false;
        this.isEditing = false;
        this.isDeleting = false;
    }

    initialLoad = (): void => {};

    createTask = (): void => {};

    editTask = (): void => {};

    deleteTask = (): void => {};
}
