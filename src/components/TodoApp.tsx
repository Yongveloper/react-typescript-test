import { useCallback, useEffect, useRef, useState } from 'react';
import { filterOptions } from '../ultils';
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
      done: false,
    },
  ]);
  const nextId = useRef(3);

  const [filtedTodos, setFilterdTodos] = useState(todos);

  const [selected, setSelected] = useState(filterOptions[0].name);

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

  const handleFilterTodo = () => {
    switch (selected) {
      case filterOptions[0].name:
        setFilterdTodos(todos);
        break;
      case filterOptions[1].name:
        setFilterdTodos(todos.filter((todo) => todo.done));
        break;
      case filterOptions[2].name:
        setFilterdTodos(todos.filter((todo) => !todo.done));
        break;
    }
  };

  useEffect(() => {
    handleFilterTodo();
  }, [todos, selected]);

  return (
    <>
      <TodoForm onInsert={onInsert} />
      <TodoFilters selected={selected} onChange={handleSelect} />
      <TodoList todos={filtedTodos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
}

export default TodoApp;
