import { Task } from "./task";

class TaskExecutor {
    private runningTasks: Task[] = [];

    addTaskToExecutor(task: Task) {
        this.runningTasks.push(task);
    }

    executeTasks() {
        this.runningTasks.forEach(task => {
            task.execute();
        });
        this.runningTasks = [];
    }
}

export const executor = new TaskExecutor();
