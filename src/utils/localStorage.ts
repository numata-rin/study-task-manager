import type { Task } from "../types/task";

const STORAGE_KEY = "study-task-manager-tasks";

// 保存処理
// LocalStorageには基本的に文字列しか保存できない
// JSON.stringify()でタスク配列を文字列に変換して保存している
export const saveTasksToLocalStorage = (tasks: Task[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

// 読み込み処理
export const loadTasksFromLocalStorage = (): Task[] | null => {
  const storedTasks = localStorage.getItem(STORAGE_KEY);

  if (!storedTasks) {
    return null;
  }

  try {
    return JSON.parse(storedTasks) as Task[];
  } catch {
    return null;
  }
};