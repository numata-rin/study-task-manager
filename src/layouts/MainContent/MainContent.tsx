import "./MainContent.css";

import type { Task } from "../../types/task";
import TaskList from "../../conponents/TaskList/TaskList";
import TaskForm from "../../conponents/TaskForm/TaskForm";

type MainContentProps = {
  tasks: Task[];
  onAddTask: (title: string, content: string, deadline: string) => void;
};

const MainContent = ({ tasks, onAddTask }: MainContentProps) => {

  return (
    <main className="main-content">
      <TaskList tasks={tasks}/>
      <TaskForm onAddTask={onAddTask}/>
    </main>
  )
};

export default MainContent;