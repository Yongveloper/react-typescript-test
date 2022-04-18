import { useCallback, useRef, useState } from 'react';
import TodoFilters from './TodoFilters';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'TDD 배우기',
      done: true,
    },
    {
      id: 2,
      text: 'react-testing-library 사용하기',
      done: true,
    },
  ]);
  const nextId = useRef(3);

  const options = [
    { name: 'Show All', key: 'all' },
    { name: 'Show Completed', key: 'completed' },
    { name: 'Show Uncompleted', key: 'uncompleted' },
  ];

  const [selected, setSelected] = useState(options[0].name);

  const handleSelect = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelected(event.currentTarget.value);
    },
    []
  );

  const onInsert = useCallback((text) => {
    setTodos((todos) => [...todos, { id: nextId.current, text, done: false }]);
    nextId.current++;
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <>
      <TodoForm onInsert={onInsert} />
      <TodoFilters selected={selected} onChange={handleSelect} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
}

export default TodoApp;
