import "./TaskItem.css";

import type { Task } from "../../../types/task";

type TaskItemProps = {
  task: Task;
  onToggleTaskCompletion: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

const TaskItem = ({
  task,
  onToggleTaskCompletion,
  onDeleteTask,
}: TaskItemProps) => {
  
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

      <div className="task-item__meta">
        <span className="task-item__deadline">期限： {task.deadline}</span>
      </div>

      <button
        type="button"
        className="task-item__delete-button"
        onClick={() => onDeleteTask(task.id)}
      >
      削除
      </button>
      
    </li>
  )
};

export default TaskItem;