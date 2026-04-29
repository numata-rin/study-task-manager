import "./TaskItem.css";

import type { Task } from "../../types/task";

type TaskItemProps = {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  
  return (
    <li className={`task-item ${task.completed ? "task-item--completed" : ""}`}>

      <div className="task-item__main">
        <h3 className="task-item__title">{task.title}</h3>
        <p className="task-item__content">{task.content}</p>
      </div>

      <div className="task-item__meta">
        <span className="task-item__deadline">期限： {task.deadline}</span>
        <span className="task-item__status">
          {task.completed ? "完了済み" : "未完了"}
        </span>
      </div>
      
    </li>
  )
};

export default TaskItem;