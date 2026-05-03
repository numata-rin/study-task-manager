import "./MainContent.css";

import type { Task } from "../../types/task";
import TaskList from "../../conponents/TaskList/TaskList";
import TaskForm from "../../conponents/TaskForm/TaskForm";

type MainContentProps = {
  tasks: Task[];
  onAddTask: (title: string, content: string, deadline: string) => void;
  onToggleTaskCompletion: (id: string) => void;
};

const MainContent = ({
  tasks,
  onAddTask,
  onToggleTaskCompletion,
 }: MainContentProps) => {

  return (
    <main className="main-content">
      <TaskList
      tasks={tasks}
      onToggleTaskCompletion={onToggleTaskCompletion}
      />
      
      <TaskForm onAddTask={onAddTask}/>
    </main>
  )
};

export default MainContent;