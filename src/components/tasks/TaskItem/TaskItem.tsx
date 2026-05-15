import "./TaskItem.css";

import type { Task, TaskCategory, TaskPriority } from "../../../types/task";
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
  const [editTitle, setEditTitle] = useState(task.title);
  const [editContent, setEditContent] = useState(task.content);
  const [editDeadline, setEditDeadline] = useState(task.deadline);
  const [editCategory, setEditCategory] = useState<TaskCategory>(task.category);
  const [editPriority, setEditPriority] = useState<TaskPriority>(task.priority);

  const handleEditStart = () => {
    setIsEditing(true);
    setEditTitle(task.title);
    setEditContent(task.content);
    setEditDeadline(task.deadline);
    setEditCategory(task.category);
    setEditPriority(task.priority);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setEditTitle(task.title);
    setEditContent(task.content);
    setEditDeadline(task.deadline);
    setEditCategory(task.category);
    setEditPriority(task.priority);
  };

  const handleEditSave = () => {
    if (editTitle.trim() === "") {
      return;
    }

    onEditTask(
      task.id, 
      editTitle, 
      editContent, 
      editDeadline,
      editCategory,
      editPriority
    );

    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <li className="task-item">
        <div className="task-item__edit-form">
          <div className="task-item__edit-field">
            <label htmlFor={`edit-title-${task.id}`}>タスク名</label>
            <input
              id={`edit-title-${task.id}`}
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
          </div>

          <div className="task-item__edit-field">
            <label htmlFor={`edit-content-${task.id}`}>内容</label>
            <input
              id={`edit-title-${task.id}`}
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
            />
          </div>

          <div className="task-item__edit-field">
            <label htmlFor={`edit-deadline-${task.id}`}>期限</label>
            <input
              id={`edit-deadline-${task.id}`}
              type="date"
              value={editDeadline}
              onChange={(e) => setEditDeadline(e.target.value)}
            />
          </div>

          <div className="task-item__edit-field">
            <label htmlFor={`edit-category-${task.id}`}>カテゴリ</label>
            <select
              id={`edit-category-${task.id}`}
              value={editCategory}
              onChange={(e) => setEditCategory(e.target.value as TaskCategory)}
            >
              <option value="React">React</option>
              <option value="Django">Django</option>
              <option value="Research">Research</option>
              <option value="TOEIC">TOEIC</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="task-item__edit-field">
            <label htmlFor={`edit-priority-${task.id}`}>優先度</label>
            <select
              id={`edit-priority-${task.id}`}
              value={editPriority}
              onChange={(e) => setEditPriority(e.target.value as TaskPriority)}
            >
              <option value="low">低</option>
              <option value="medium">中</option>
              <option value="high">高</option>
            </select>
          </div>

          <div className="task-item__action">
            <button type="button" onClick={handleEditSave}>
              保存
            </button>

            <button type="button" onClick={handleEditCancel}>
              キャンセル
            </button>
          </div>
        </div>
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
        <p className="task-item__content">{task.content}</p>
      </div>

      <div className="task-item__details">
        <span className="task-item__detail">カテゴリ: {task.category}</span>
        <span className="task-item__detail">
          優先度: {priorityLabels[task.priority]}
        </span>
      </div>

      <div className="task-item__meta">
        <span className="task-item__deadline">期限: {task.deadline}</span>

        <div className="task-item__actions">
          <button
            type="button"
            className="task-item__edit-button"
            onClick={handleEditStart}
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
