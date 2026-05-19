import "./TaskForm.css";
import React, { useState } from "react";
import type { TaskCategory, TaskPriority } from "../../../../types/task";

type TaskFormProps = {
  onAddTask: (
    title: string, 
    content: string, 
    deadline: string,
    category: TaskCategory,
    priority: TaskPriority,
  ) => void;
}

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [deadline, setDeadline] = useState("");
  const [category, setCategory] = useState<TaskCategory>("React");
  const [priority, setPriority] = useState<TaskPriority>("medium");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // フォーム送信時にページがリロードされるのを防ぐ記述
    // これがないと追加ボタンを押した瞬間にページが再読み込みされてstateがリセットされる
    e.preventDefault();

    // 空のタスク名を防ぐ記述
    // trim()で前後の空白を消去し、それが空文字だった場合にreturnする。
    if (title.trim() === "") {
      return;
    }

    onAddTask(title, content, deadline, category, priority);

    // onAddTask後に各stateを初期化する記述
    setTitle("");
    setContent("");
    setDeadline("");
    setCategory("React");
    setPriority("medium");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>

      <div className="task-form__field">
        <label htmlFor="title">タスク名</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="例：ReactのuseStateを復習する"
        />
      </div>

      <div className="task-form__field">
        <label htmlFor="context">内容</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="タスクの詳細を入力"
        />
      </div>

      <div className="task-form__field">
        <label htmlFor="deadline">期限</label>
        <input 
          id="deadline"
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>

      <div className="task-form__field">
        <label htmlFor="category">カテゴリ</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value as TaskCategory)}
        >
          <option value="React">React</option>
          <option value="Django">Django</option>
          <option value="Research">Research</option>
          <option value="TOEIC">TOEIC</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="task-form__field">
        <label htmlFor="priority">優先度</label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value as TaskPriority)}
        >
          <option value="low">低</option>
          <option value="medium">中</option>
          <option value="high">高</option>
        </select>
      </div>

      <button type="submit">追加</button>

    </form>
  )
}

export default TaskForm;