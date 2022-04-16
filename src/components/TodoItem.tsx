import { useCallback } from 'react';
import { TodoType } from './TodoList';

interface ITodoItemProps {
  todo: TodoType;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

function TodoItem({ todo, onToggle, onRemove }: ITodoItemProps) {
  const { id, text, done } = todo;

  const toggle = useCallback(() => onToggle(id), [id, onToggle]);
  const remove = useCallback(() => onRemove(id), [id, onRemove]);

  return (
    <li onClick={toggle}>
      <span style={{ textDecoration: done ? 'line-through' : 'none' }}>
        {text}
      </span>
      <button onClick={remove}>삭제</button>
    </li>
  );
}

export default TodoItem;
