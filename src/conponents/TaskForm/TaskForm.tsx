import "./TaskForm.css";
import React, { useState } from "react";

type TaskFormProps = {
  onAddTask: (title: string, content: string, deadline: string) => void;
}

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // フォーム送信時にページがリロードされるのを防ぐ記述
    // これがないと追加ボタンを押した瞬間にページが再読み込みされてstateがリセットされる
    e.preventDefault();

    // 空のタスク名を防ぐ記述
    // trim()で前後の空白を消去し、それが空文字だった場合にreturnする。
    if (title.trim() === "") {
      return;
    }

    onAddTask(title, content, deadline);

    // onAddTask後に各stateを初期化する記述
    setTitle("");
    setContent("");
    setDeadline("");
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

      <button type="submit">追加</button>

    </form>
  )
}

export default TaskForm;