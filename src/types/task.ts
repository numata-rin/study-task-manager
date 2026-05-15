export type TaskCategory = 
  | "React"
  | "Django"
  | "Research"
  | "TOEIC"
  | "Other";

export type TaskPriority = 
  | "low"
  | "medium"
  | "high"

export type Task = {
  id: string;
  title: string;
  content: string;
  deadline: string;
  category: TaskCategory;
  priority: TaskPriority;
  completed: boolean;
  createdAt: string;
}