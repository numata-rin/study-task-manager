import "./TaskItem.css";

import type { Task, TaskCategory, TaskPriority } from "../../../types/task";
import TaskEditForm from "../TaskForm/TaskEditForm/TaskEditForm";
import { useState } from "react";

type TaskItemProps = {
  task: Task;
  onToggleTaskCompletion: (id: string) => void;
  onDeleteTask: (id: string) => void;
  onEditTask: (
    id: string,
    title: string,
    content: string,
    deadline: string,
    category: TaskCategory,
    priority: TaskPriority,
  ) => void;
};

const priorityLabels: Record<TaskPriority, string> = {
  low: "低",
  medium: "中",
  high: "高",
};

const TaskItem = ({
  task,
  onToggleTaskCompletion,
  onDeleteTask,
  onEditTask,
}: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (
    id: string,
    title: string,
    content: string,
    deadline: string,
    category: TaskCategory,
    priority: TaskPriority
  ) => {
    onEditTask(id, title, content, deadline, category, priority);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <li className="task-item">
        <TaskEditForm
          task={task}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      </li>
    );
  }

  return (
    <li className={`task-item ${task.completed ? "task-item--completed" : ""}`}>
      <div className="task-item__main">
        <label className="task-item__check">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTaskCompletion(task.id)}
          />
          <span className="task-item__status-text">
            {task.completed ? "完了済み" : "未完了"}
          </span>
        </label>

        <h3 className="task-item__title">{task.title}</h3>
          <p className="task-item__content">
            <span className="task-item__detail-label">内容：</span>{task.content}
          </p>
      </div>

      <div className="task-item__details">
        <span className="task-item__detail">
          <span className="task-item__detail-label">
            カテゴリ：
          </span>
          {task.category}
        </span>
        <span className="task-item__detail">
          <span className="task-item__detail-label">
            優先度：
          </span>
          {priorityLabels[task.priority] ?? "中"}
        </span>
      </div>

      <div className="task-item__meta">
        <span className="task-item__deadline">期限: {task.deadline || "未設定"}</span>

        <div className="task-item__actions">
          <button
            type="button"
            className="task-item__edit-button"
            onClick={() => setIsEditing(true)}
          >
            編集
          </button>

          <button
            type="button"
            className="task-item__delete-button"
            onClick={() => onDeleteTask(task.id)}
          >
            削除
          </button>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
