import { useState } from 'react';
import style from './todoform.module.css';
export default function TodoForm({ todos, setTodos }) {
  const [taskTodo, setTaskTodo] = useState({
    name: '',
    status: false,
  });

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskTodo == null || taskTodo.name === '') {
      alert('No Task was described.');
      return;
    }
    setTodos([...todos, taskTodo]);
    setTaskTodo({ ...taskTodo, name: '' });
  };
  return (
    <form className={style.todoform} onSubmit={(e) => handleAddTask(e)}>
      <div className={style.todoFormContainer}>
        <input
          type="text"
          placeholder="Enter Todo Description"
          value={taskTodo.name}
          onChange={(e) => setTaskTodo({ ...taskTodo, name: e.target.value })}
          className={style.todoInput}
        />
        <button className={style.todoSubmit} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
