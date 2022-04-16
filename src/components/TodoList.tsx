import TodoItem from './TodoItem';

export interface TodoType {
  id: number;
  text: string;
  done: boolean;
}

interface ITodoListProps {
  todos: TodoType[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

function TodoList({ todos, onToggle, onRemove }: ITodoListProps) {
  return (
    <ul data-testid="TodoList">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

export default TodoList;
