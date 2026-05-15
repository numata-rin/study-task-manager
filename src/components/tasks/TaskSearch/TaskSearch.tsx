import "./TaskSearch.css";

type TaskSearchProps = {
  searchKeyword: string;
  onChangeSearchKeyword: (keyword: string) => void;
};

const TaskSearch = ({
  searchKeyword, 
  onChangeSearchKeyword,
}: TaskSearchProps) => {
  return (
    <div className="task-search">
      <label htmlFor="task-search" className="task-search__label">
        <h2>タスク検索</h2>
      </label>

      <input
        id="task-search"
        type="text"
        className="task-search__input"
        value={searchKeyword}
        onChange={(e) => onChangeSearchKeyword(e.target.value)}
        placeholder="タイトル・内容で検索"
        />
    </div>
  );
};

export default TaskSearch;