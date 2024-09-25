import { useState } from 'react';
import TodoForm from './TodoForm';
import Todos from './Todos';
import TodoFooter from './TodoFooter';

export default function TodoInput() {
  const [todos, setTodos] = useState([]);

  const completedTodos = todos.reduce((count, todo) => {
    return todo.status ? count + 1 : count;
  }, 0);
  const totalTodos = todos.length;
  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos} />
      <br />
      {todos.length > 0 ? <Todos todos={todos} setTodos={setTodos} /> : null}
      <br />
      <TodoFooter completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
