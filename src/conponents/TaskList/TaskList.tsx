import "./TaskList.css";

import type { Task } from "../../types/task";
import TaskItem from "../TaskItem/TaskItem.tsx";

type TaskListProps = {
  tasks: Task[];
};


const TaskList = ({ tasks }: TaskListProps) => {
  
  if (tasks.length === 0) {
    return <p className="task-list__empty">タスクはまだありません。</p>;
  }

  return (
    <section className="task-list">
      <h2 className="task-list__title">タスク一覧</h2>

      <ul className="task-list__items">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task}/>
        ))}
      </ul>
    </section>
  )
};

export default TaskList;