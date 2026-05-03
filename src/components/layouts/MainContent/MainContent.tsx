import "./MainContent.css";

import type { Task } from "../../../types/task";
import TaskList from "../../tasks/TaskList/TaskList";
import TaskForm from "../../tasks/TaskForm/TaskForm";

type MainContentProps = {
  tasks: Task[];
  onAddTask: (title: string, content: string, deadline: string) => void;
  onToggleTaskCompletion: (id: string) => void;
  onDeleteTask: (id: string) => void;
};

const MainContent = ({
  tasks,
  onAddTask,
  onToggleTaskCompletion,
  onDeleteTask,
 }: MainContentProps) => {

  return (
    <main className="main-content">
      <TaskList
      tasks={tasks}
      onToggleTaskCompletion={onToggleTaskCompletion}
      onDeleteTask={onDeleteTask}
      />
      
      <TaskForm onAddTask={onAddTask}/>
    </main>
  )
};

export default MainContent;