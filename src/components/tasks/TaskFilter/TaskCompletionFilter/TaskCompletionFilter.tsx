import "./TaskCompletionFilter.css";

export type CompletionFilterValue = "all" | "incomplete" | "completed";

type TaskCompletionFilterProps = {
  completionFilter: CompletionFilterValue;
  onChangeCompletionFilter: (filter: CompletionFilterValue) => void;
};

const filters: {
  value: CompletionFilterValue;
  label: string;
}[] = [
  { value: "all", label: "すべて" },
  { value: "incomplete", label: "未完了"},
  { value: "completed", label: "完了済み"},
];

export const TaskCompletionFilter = ({
  completionFilter,
  onChangeCompletionFilter,
}: TaskCompletionFilterProps) => {
  return(
    <div className="task-completion-filter">
      <p className="task-completion-filter__label">完了状態</p>

      <div className="task-completion-filter__buttons">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            className={`task-completion-filter__button ${
              completionFilter === filter.value
              ? "task-completion-filter__button--active"
              : ""
            }`}
            onClick={() => onChangeCompletionFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TaskCompletionFilter;