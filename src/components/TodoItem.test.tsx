import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('<TodoItem />', () => {
  const sampleTodo = {
    id: 1,
    text: 'TDD 배우기',
    done: false,
  };

  const setup = (todo = sampleTodo) => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();
    render(<TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove} />);
    const span = screen.getByText(todo.text);
    const button = screen.getByText('삭제');

    return {
      span,
      button,
      onToggle,
      onRemove,
    };
  };

  it('has span and button', () => {
    const { span, button } = setup();

    expect(span).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('shows line-through on span when done is true', () => {
    const { span } = setup({ ...sampleTodo, done: true });

    expect(span).toHaveStyle('text-decoration: line-through;');
  });

  it('shows line-through on span when done is false', () => {
    const { span } = setup({ ...sampleTodo, done: false });

    expect(span).not.toHaveStyle('text-decoration: line-through;');
  });

  it('calls onToggle', () => {
    const { span, onToggle } = setup();

    fireEvent.click(span);

    expect(onToggle).toBeCalledWith(sampleTodo.id);
  });

  it('calls onRemove', () => {
    const { button, onRemove } = setup();

    fireEvent.click(button);

    expect(onRemove).toBeCalledWith(sampleTodo.id);
  });
});
