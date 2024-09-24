"use strict";
// // Base class: Task
// class Task {
//     title: string;
//     description: string;
//     completed: boolean;
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(title: string, description: string) {
//         this.title = title;
//         this.description = description;
//         this.completed = false; // Initially, task is not completed
//     }
//     // Mark task as completed
//     completeTask(): void {
//         this.completed = true;
//         console.log(`Task "${this.title}" is marked as completed.`);
//     }
//     // Display task info (common method)
//     displayTaskInfo(): void {
//         console.log(`Task: ${this.title}\nDescription: ${this.description}\nCompleted: ${this.completed}`);
//     }
// }
// // Derived class: UrgentTask (inherits from Task)
// class UrgentTask extends Task {
//      deadline: Date;
//     constructor(title: string, description: string, deadline: Date) {
//         super(title, description); // Call base class constructor
//         this.deadline = deadline;
//     }
//     // Override displayTaskInfo to include deadline
//      displayTaskInfo(): void {
//         console.log(`Urgent Task: ${this.title}\nDescription: ${this.description}\nDeadline: ${this.deadline}\nCompleted: ${this.completed}`);
//     }
//     // Polymorphism: Mark urgent task as completed with a different behavior
//      completeTask(): void {
//         this.completed = true;
//         console.log(`Urgent Task "${this.title}" completed before the deadline on ${this.deadline}.`);
//     }
// }
// // Derived class: OptionalTask (inherits from Task)
// class OptionalTask extends Task {
//      isOptional: boolean;
//     constructor(title: string, description: string) {
//         super(title, description);
//         this.isOptional = true; // Optional task flag
//     }
//     // Polymorphism: Override completeTask method for OptionalTask
//      completeTask(): void {
//         this.completed = true;
//         console.log(`Optional Task "${this.title}" marked as completed (optional).`);
//     }
//     // Override displayTaskInfo
//      displayTaskInfo(): void {
//         console.log(`Optional Task: ${this.title}\nDescription: ${this.description}\nCompleted: ${this.completed}`);
//     }
// }
// // Main Application Logic
// // Create general task
const generalTask = new Task("Clean the room", "Tidy up the living room");
generalTask.displayTaskInfo();
generalTask.completeTask();
// // Create urgent task
const urgentTask = new UrgentTask("Submit assignment", "Finish and submit the project by today", new Date('2024-09-16'));
urgentTask.displayTaskInfo();
urgentTask.completeTask();
// // Create optional task
const optionalTask = new OptionalTask("Watch tutorial", "Watch a programming tutorial video");
optionalTask.displayTaskInfo();
optionalTask.completeTask();
