import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TodoList from './TodoList';

describe('<TodoList />', () => {
  const sampleTodos = [
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
  ];
  const onToggle = jest.fn();
  const onRemove = jest.fn();

  it('renders todos properly', () => {
    render(
      <TodoList todos={sampleTodos} onToggle={onToggle} onRemove={onRemove} />
    );
    const firstTodo = screen.getByText(sampleTodos[0].text);
    const secondTodo = screen.getByText(sampleTodos[1].text);

    expect(firstTodo).toBeInTheDocument();
    expect(secondTodo).toBeInTheDocument();
  });

  it('calls onToggle and onRemove', () => {
    render(
      <TodoList todos={sampleTodos} onToggle={onToggle} onRemove={onRemove} />
    );
    const firstTodo = screen.getByText(sampleTodos[0].text);
    const removeButton = screen.getAllByText('삭제')[0];

    fireEvent.click(firstTodo);
    expect(onToggle).toBeCalledWith(sampleTodos[0].id);

    fireEvent.click(removeButton);
    expect(onRemove).toBeCalledWith(sampleTodos[0].id);
  });
});
