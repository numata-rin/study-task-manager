import "./MainContent.css";
import { useState } from "react";

import type { Task, TaskCategory, TaskPriority } from "../../../types/task";
import TaskList from "../../tasks/TaskList/TaskList";
import TaskForm from "../../tasks/TaskForm/TaskForm/TaskForm";
import TaskSearch from "../../tasks/TaskSearch/TaskSearch";
import TaskCategoryFilter from "../../tasks/TaskFilter/TaskCategoryFilter/TaskCategoryFilter";
import { TaskCompletionFilter, type CompletionFilterValue } from "../../tasks/TaskFilter/TaskCompletionFilter/TaskCompletionFilter";

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

  // const hasNoTasks = tasks.length === 0;

  // const emptyTitle = hasNoTasks
  //   ? "まだタスクがありません。"
  //   : "条件に一致するタスクが見つかりませんでした。";

  // const emptyMessage = hasNoTasks
  //   ? "まずは学習タスクを追加して、今日やることを整理してみましょう。"
  //   : "検索キーワードやカテゴリ、完了状態の条件を変更してもう一度確認してください。"

  const getEmptyMessage = () => {

    if (tasks.length === 0) {
      return {
        title: "まだタスクがありません",
        message:
          "まずは学習タスクを追加して、今日やることを整理してみましょう。",
     };
    }

    if (normalizedKeyword !== "") {
      return {
        title: "検索結果が見つかりませんでした",
        message:
          "キーワードを変更するか、検索欄を空にしてもう一度確認してください。",
      };
    }

    if (selectedCategory !== "all") {
      return {
        title: "このカテゴリのタスクはありません",
        message:
          "別のカテゴリを選択するか、新しいタスクを追加してみましょう。",
      };
    }

    if (completionFilter !== "all") {
      return {
        title: "該当する完了状態のタスクはありません",
        message: "完了状態の条件を変更してもう一度確認してください。",
      };
    }

    return {
      title: "表示できるタスクがありません",
      message: "条件を変更してもう一度確認してください。",
    };
  };

  const emptyState = getEmptyMessage();

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
        emptyTitle={emptyState.title}
        emptyMessage={emptyState.message}
        onToggleTaskCompletion={onToggleTaskCompletion}
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask}
      />
      
      <TaskForm onAddTask={onAddTask} />
    </main>
  )
};

export default MainContent;