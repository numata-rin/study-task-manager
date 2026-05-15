import "./MainContent.css";

import type { Task, TaskCategory, TaskPriority } from "../../../types/task";
import TaskList from "../../tasks/TaskList/TaskList";
import TaskForm from "../../tasks/TaskForm/TaskForm";

type MainContentProps = {
  tasks: Task[];
  onAddTask: (
    title: string, 
    content: string, 
    deadline: string, 
    category: TaskCategory, 
    priority: TaskPriority
  ) => void;
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

const MainContent = ({
  tasks,
  onAddTask,
  onToggleTaskCompletion,
  onDeleteTask,
  onEditTask,
 }: MainContentProps) => {

  return (
    <main className="main-content">
      <TaskList
      tasks={tasks}
      onToggleTaskCompletion={onToggleTaskCompletion}
      onDeleteTask={onDeleteTask}
      onEditTask={onEditTask}
      />
      
      <TaskForm onAddTask={onAddTask}/>
    </main>
  )
};

export default MainContent;