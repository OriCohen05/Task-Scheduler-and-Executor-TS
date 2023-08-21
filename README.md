# Task-Scheduler-and-Executor-TS

## Features

- **Task Scheduling:** Schedule tasks to be executed after a specified delay.
- **Task Execution:** Execute scheduled tasks using the executor.
- **TypeScript:** Utilize TypeScript's strong typing and modern features for type-safe task management.

## Project Structure

- `task.ts`: Defines the `Task` type.
- `scheduler.ts`: Implements the `TaskScheduler` class for scheduling tasks.
- `executor.ts`: Implements the `TaskExecutor` class for executing tasks.
- `index.ts`: Example usage and demonstration.

## Getting Started

1. Clone this repository: `git clone https://github.com/yourusername/task-scheduler-executor.git`
2. Navigate to the project folder: `cd task-scheduler-executor`
3. Install dependencies (if needed): `npm install`
4. Compile TypeScript code: `npx tsc`
5. Run the example: `node dist/index.js`

## Usage

1. Schedule tasks using the `scheduler.scheduleTask` method and specify a delay.
2. List scheduled tasks using the `scheduler.listScheduledTasks` method.
3. Add tasks to the executor using the `executor.addTaskToExecutor` method.
4. Execute tasks using the `executor.executeTasks` method.

## Example

```typescript
import { scheduler } from "./scheduler";
import { executor } from "./executor";

// Define sample tasks
const sampleTask1 = /* ... */;
const sampleTask2 = /* ... */;

// Schedule tasks
scheduler.scheduleTask(sampleTask1, 2000);
scheduler.scheduleTask(sampleTask2, 3000);

// List scheduled tasks
console.log("Scheduled tasks:", scheduler.listScheduledTasks());

// Add tasks to executor and execute
executor.addTaskToExecutor(sampleTask1);
executor.addTaskToExecutor(sampleTask2);

executor.executeTasks();
```

