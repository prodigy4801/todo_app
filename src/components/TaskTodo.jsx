import styles from './tasktodo.module.css';
export default function TaskTodo({ task, taskKey, todos, setTodos }) {
  const handleTodoDelete = (taskId) => {
    setTodos(todos.filter((todo, index) => index !== taskId));
  };
  const handleDoneTodo = (taskName) => {
    setTodos(todos.map((todo) => (todo.name === taskName ? { ...todo, status: !todo.status } : todo)));
    console.log(todos);
  };
  const addCSSStyling = task.status ? `${styles.todoValue} ${styles.completedTodo}` : `${styles.todoValue}`;
  return (
    <div key={taskKey} className={styles.todoWrapper}>
      <div className={styles.todoItem}>
        <span onClick={() => handleDoneTodo(task.name)} className={addCSSStyling}>
          {task.name}
        </span>
        <button onClick={() => handleTodoDelete(taskKey)} className={styles.todoDeleteBtn}>
          <svg
            className={styles.todoDeleteSvg}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 22 L 19 22 L 19 7 L 5 7 z M 8 9 L 10 9 L 10 20 L 8 20 L 8 9 z M 14 9 L 16 9 L 16 20 L 14 20 L 14 9 z"></path>
          </svg>
        </button>
      </div>
      <hr className={styles.todoLine} />
    </div>
  );
}
