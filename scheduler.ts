import { Task } from "./task";

class TaskScheduler {
    private tasks: Task[] = [];

    scheduleTask(task: Task, delay: number) {
        const scheduledTask = setTimeout(() => {
            task.execute();
            this.tasks = this.tasks.filter(t => t !== task);
        }, delay);
        this.tasks.push({ ...task, execute: () => clearTimeout(scheduledTask) });
    }

    listScheduledTasks() {
        return this.tasks.map(task => task.name);
    }
}

export const scheduler = new TaskScheduler();
