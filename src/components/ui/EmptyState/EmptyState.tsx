import "./EmptyState.css";

type EmptyStateProps = {
  title: string;
  message: string;
};

const EmptyState = ({ title, message }: EmptyStateProps) => {
  return (
    <div className="empty-state">
      <div className="empty-state__icon">📝</div>
      <h3 className="empty-state__title">{title}</h3>
      <p className="empty-state__message">{message}</p>
    </div>
  );
};

export default EmptyState;