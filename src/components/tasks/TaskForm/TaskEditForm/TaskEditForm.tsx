import "./TaskEditForm.css";

import React, { useState } from "react";
import type { Task, TaskCategory, TaskPriority } from "../../../../types/task";

type TaskEditFormProps = {
  task: Task;
  onSave: (
    id: string,
    title: string,
    content: string,
    deadline: string,
    category: TaskCategory,
    priority: TaskPriority,
  ) => void;
  onCancel: () => void;
};

const TaskEditForm = ({
  task,
  onSave,
  onCancel,
}: TaskEditFormProps) => {
  const [editTitle, setEditTitle] = useState(task.title);
  const [editContent, setEditContent] = useState(task.content);
  const [editDeadline, setEditDeadline] = useState(task.deadline);
  const [editCategory, setEditCategory] = useState<TaskCategory>(task.category);
  const [editPriority, setEditPriority] = useState<TaskPriority>(task.priority);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editTitle.trim() === "") {
      return;
    }

    onSave(
      task.id,
      editTitle,
      editContent,
      editDeadline,
      editCategory,
      editPriority
    );
  };

  return (
    <form className="task-edit-form" onSubmit={handleSubmit}>
      <div className="task-edit-form__field">
        <label htmlFor={`edit-title-${task.id}`}>タスク名</label>
        <input
          id={`edit-title-${task.id}`}
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
      </div>

       <div className="task-edit-form__field">
        <label htmlFor={`edit-content-${task.id}`}>内容</label>
        <textarea
          id={`edit-content-${task.id}`}
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
        />
      </div>

      <div className="task-edit-form__field">
        <label htmlFor={`edit-deadline-${task.id}`}>期限</label>
        <input
          id={`edit-deadline-${task.id}`}
          type="date"
          value={editDeadline}
          onChange={(e) => setEditDeadline(e.target.value)}
        />
      </div>

      <div className="task-edit-form__field">
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

      <div className="task-edit-form__field">
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

      <div className="task-edit-form__actions">
        <button type="submit" className="task-edit-form__save-button">
          保存
        </button>

        <button
          type="button"
          className="task-edit-form__cancel-button"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    
    </form>
  )

};

export default TaskEditForm;
