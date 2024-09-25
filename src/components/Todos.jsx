import TaskTodo from './TaskTodo';
import style from './todos.module.css';

export default function Todos({ todos, setTodos }) {
  const sortedTodos = todos.slice().sort((a, b) => Number(a.status) - Number(b.status));
  return (
    <div className={style.todosContiner}>
      {sortedTodos.map((todo, index) => (
        <TaskTodo key={index} task={todo} taskKey={index} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
