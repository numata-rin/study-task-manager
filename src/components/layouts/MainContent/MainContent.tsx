import "./MainContent.css";
import { useState } from "react";

import type { Task, TaskCategory, TaskPriority } from "../../../types/task";
import TaskList from "../../tasks/TaskList/TaskList";
import TaskForm from "../../tasks/TaskForm/TaskForm";
import TaskSearch from "../../tasks/TaskSearch/TaskSearch";
import TaskCategoryFilter from "../../tasks/TaskCategoryFilter/TaskCategoryFilter";
import { TaskCompletionFilter, type CompletionFilterValue } from "../../tasks/TaskCompletionFilter/TaskCompletionFilter";

type CategoryFilterValue = TaskCategory | "all";

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
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilterValue>("all");
  const [completionFilter, setCompletionFilter] = useState<CompletionFilterValue>("all");

  // trim()で前後の空白を削除、toLowerCase()で大文字小文字を区別しないように小文字化
  const normalizedKeyword = searchKeyword.trim().toLowerCase();

  const filteredTasks = tasks.filter((task) => {
    const matchesKeyword = 
      normalizedKeyword === "" ||
      task.title.toLowerCase().includes(normalizedKeyword) ||
      task.content.toLowerCase().includes(normalizedKeyword);

      const matchesCategory = 
        selectedCategory === "all" || task.category === selectedCategory;

      const matchesCompletion = 
        completionFilter === "all" ||
        (completionFilter === "completed" && task.completed) ||
        (completionFilter === "incomplete" && !task.completed);

      return matchesKeyword && matchesCategory && matchesCompletion;
  });

  return (
    <main className="main-content">

      <TaskSearch
        searchKeyword={searchKeyword}
        onChangeSearchKeyword={setSearchKeyword}
      />

      <TaskCategoryFilter
        selectedCategory={selectedCategory}
        onChangeCategory={setSelectedCategory}
      />

      <TaskCompletionFilter
        completionFilter={completionFilter}
        onChangeCompletionFilter={setCompletionFilter}
      />

      <TaskList
        tasks={filteredTasks}
        onToggleTaskCompletion={onToggleTaskCompletion}
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask}
      />
      
      <TaskForm onAddTask={onAddTask}/>
    </main>
  )
};

export default MainContent;