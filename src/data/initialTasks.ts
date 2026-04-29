import type { Task } from "../types/task";

export const initialTasks: Task[] = [
  {
    id: "1",
    title: "Test Task",
    content: "Test Content",
    deadline: "2026-10-13",
    completed: false,
    createdAt: "2026-04-29T00:00:00.000Z",
  },
  {
    id: "2",
    title: "Test Task2",
    content: "Text Content2",
    deadline: "2027-10-13",
    completed: true,
    createdAt: "2026-04-29T00:00:00.000Z",
  },
  {
    id: "3",
    title: "Test Task3",
    content: "Text Content3",
    deadline: "2028-10-13",
    completed: false,
    createdAt: "2026-04-29T00:00:00.000Z",
  }
];