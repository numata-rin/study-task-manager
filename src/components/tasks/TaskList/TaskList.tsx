import "./TaskList.css";

import type { Task, TaskCategory, TaskPriority } from "../../../types/task.ts";
import TaskItem from "../TaskItem/TaskItem.tsx";
import EmptyState from "../../ui/EmptyState/EmptyState.tsx";

type TaskListProps = {
  tasks: Task[];
  emptyTitle: string;
  emptyMessage: string;
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

const TaskList = ({
  tasks,
  emptyTitle,
  emptyMessage,
  onToggleTaskCompletion,
  onDeleteTask,
  onEditTask,
}: TaskListProps) => {
  
  if (tasks.length === 0) {
    return <EmptyState title={emptyTitle} message={emptyMessage} />
  }

  return (
    <section className="task-list">
      <h2 className="task-list__title">タスク一覧</h2>

      <ul className="task-list__items">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleTaskCompletion={onToggleTaskCompletion}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
            />
        ))}
      </ul>
    </section>
  )
};

export default TaskList;