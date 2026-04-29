import "./MainContent.css";

import type { Task } from "../../types/task";
import TaskList from "../../conponents/TaskList/TaskList";

type MainContentProps = {
  tasks: Task[];
}

const MainContent = ({ tasks }: MainContentProps) => {

  return (
    <main className="main-content">
      <TaskList tasks={tasks}/>
    </main>
  )
};

export default MainContent;