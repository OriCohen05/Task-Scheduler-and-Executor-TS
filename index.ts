import { Task } from "./task";
import { scheduler } from "./scheduler";
import { executor } from "./executor";

// Define sample tasks
const sampleTask1: Task = {
    name: "Task 1",
    description: "Sample task 1 description",
    execute: () => {
        console.log("Executing Task 1");
    }
};

const sampleTask2: Task = {
    name: "Task 2",
    description: "Sample task 2 description",
    execute: () => {
        console.log("Executing Task 2");
    }
};

// Schedule tasks
scheduler.scheduleTask(sampleTask1, 2000);
scheduler.scheduleTask(sampleTask2, 3000);

// List scheduled tasks
console.log("Scheduled tasks:", scheduler.listScheduledTasks());

// Add tasks to executor and execute
executor.addTaskToExecutor(sampleTask1);
executor.addTaskToExecutor(sampleTask2);

executor.executeTasks();
