import "./TaskCategoryFilter.css";

import type { TaskCategory } from "../../../../types/task";

type CategoryFilterValue = TaskCategory | "all";

type TaskCategoryFilterProps = {
  selectedCategory: CategoryFilterValue;
  onChangeCategory: (category: CategoryFilterValue) => void;
};

const categories: CategoryFilterValue[] = [
  "all",
  "React",
  "Django",
  "Research",
  "TOEIC",
  "Other",
];

const categoryLabels: Record<CategoryFilterValue, string> = {
  all: "すべて",
  React: "React",
  Django: "Django",
  Research: "Research",
  TOEIC: "TOEIC",
  Other: "Other",
};

const TaskCategoryFilter = ({
  selectedCategory,
  onChangeCategory,
}: TaskCategoryFilterProps) => {

  return (
    <div className="task-category-filter">
      <label htmlFor="task-category-filter" className="task-category-filter__label">
        <h2>カテゴリ絞り込み</h2>
      </label>

      <select
        id="task-category-filter"
        className="task-category-filter__select"
        value={selectedCategory}
        onChange={(e) => onChangeCategory(e.target.value as CategoryFilterValue)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {categoryLabels[category]}
          </option>
        ))}
      </select>
    </div>
  )
}

export default TaskCategoryFilter;