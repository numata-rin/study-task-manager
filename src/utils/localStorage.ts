import type { Task, TaskCategory, TaskPriority } from "../types/task";

const STORAGE_KEY = "study-task-manager-tasks";

const validCategories: TaskCategory[] = [
  "React",
  "Django",
  "Research",
  "TOEIC",
  "Other",
];

const validPriorities: TaskPriority[] = ["low", "medium", "high"];

const isTaskCategory = (value: unknown): value is TaskCategory => {
  return typeof value === "string" && validCategories.includes(value as TaskCategory);
};

const isTaskPriority = (value: unknown): value is TaskPriority => {
  return typeof value === "string" && validPriorities.includes(value as TaskPriority);
};

const normalizeTask = (task: Partial<Task>): Task | null => {
  if (
    typeof task.id !== "string" ||
    typeof task.title !== "string" ||
    task.title.trim() === ""
  ) {
    return null;
  }

  return {
    id: task.id,
    title: task.title,
    content: typeof task.content === "string" ? task.content : "",
    deadline: typeof task.deadline === "string" ? task.deadline : "",
    category: isTaskCategory(task.category) ? task.category : "Other",
    priority: isTaskPriority(task.priority) ? task.priority : "medium",
    completed: typeof task.completed === "boolean" ? task.completed : false,
    createdAt:
      typeof task.createdAt === "string"
        ? task.createdAt
        : new Date().toISOString(),
  };
};

export const saveTasksToLocalStorage = (tasks: Task[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

export const loadTasksFromLocalStorage = (): Task[] | null => {
  const storedTasks = localStorage.getItem(STORAGE_KEY);

  if (!storedTasks) {
    return null;
  }

  try {
    const parsedTasks: unknown = JSON.parse(storedTasks);

    if (!Array.isArray(parsedTasks)) {
      return null;
    }

    const normalizedTasks = parsedTasks
      .map((task) => normalizeTask(task as Partial<Task>))
      .filter((task): task is Task => task !== null);

    return normalizedTasks;
  } catch {
    return null;
  }
};