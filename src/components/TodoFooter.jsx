import style from './todofooter.module.css';
export default function TodoFooter({ completedTodos, totalTodos }) {
  return (
    <div className={style.footerWrapper}>
      <div className={style.footerContent}>
        <div className={style.footerComponent}>
          <span className={style.completedLabel}>Total Implementational Task: </span>
          <span className={style.completedValue}>{totalTodos}</span>
        </div>
        <div className={style.footerComponent}>
          <span className={style.completedLabel}>Total Completed Task: </span>
          <span className={style.completedValue}>{completedTodos}</span>
        </div>
      </div>
    </div>
  );
}
