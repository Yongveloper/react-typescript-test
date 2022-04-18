import React from 'react';
import TodoApp from '../TodoApp';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<TodoApp />', () => {
  it('renders TodoForm and TodoList', () => {
    render(<TodoApp />);
    const form = screen.getByText('등록');
    const todoList = screen.getByTestId('TodoList');

    expect(form).toBeInTheDocument();
    expect(todoList).toBeInTheDocument();
  });

  it('renders two default todos', () => {
    render(<TodoApp />);
    const firstTodo = screen.getByText('TDD 배우기');
    const secondTodo = screen.getByText('react-testing-library 사용하기');

    expect(firstTodo).toBeInTheDocument();
    expect(secondTodo).toBeInTheDocument();
  });

  it('creates new todo', () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText('오늘의 할 일');
    const button = screen.getByText('등록');

    fireEvent.change(input, {
      target: {
        value: '새 항목 추가하기',
      },
    });
    fireEvent.click(button);
    const newTodo = screen.getByText('새 항목 추가하기');

    expect(newTodo).toBeInTheDocument();
  });

  it('toggles todo', () => {
    render(<TodoApp />);

    const todoText = screen.getByText('TDD 배우기');
    expect(todoText).toHaveStyle('text-decoration: line-through;');

    fireEvent.click(todoText);
    expect(todoText).not.toHaveStyle('text-decoration: line-through;');

    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through;');
  });

  it('removes todo', () => {
    render(<TodoApp />);
    const todoText = screen.getByText('TDD 배우기');
    const removeButton = screen.getAllByText('삭제')[0];

    fireEvent.click(removeButton);

    expect(todoText).not.toBeInTheDocument();
  });

  describe('changes select options', () => {
    const options = ['Show All', 'Show Completed', 'Show Uncompleted'];

    const setup = () => {
      render(<TodoApp />);
      const select = screen.getByRole('combobox') as HTMLSelectElement;
      const firstTodo = screen.getByText('TDD 배우기');
      const secondTodo = screen.getByText('react-testing-library 사용하기');

      return {
        select,
        firstTodo,
        secondTodo,
      };
    };

    it('select "Show Completed" to show only the completed todo', () => {
      const { select, firstTodo, secondTodo } = setup();

      fireEvent.change(select, {
        target: {
          value: options[1],
        },
      });

      expect(select.value).toBe(options[1]);
      expect(firstTodo).toBeInTheDocument();
      expect(secondTodo).not.toBeInTheDocument();
    });

    it('select "Show Uncompleted" to show only the completed todo', () => {
      const { select, firstTodo, secondTodo } = setup();

      fireEvent.change(select, {
        target: {
          value: options[2],
        },
      });

      expect(select.value).toBe(options[2]);
      expect(firstTodo).not.toBeInTheDocument();
      expect(secondTodo).toBeInTheDocument();
    });

    it('select "Show All" to show All todo', () => {
      const { select, firstTodo, secondTodo } = setup();

      fireEvent.change(select, {
        target: {
          value: options[0],
        },
      });

      expect(select.value).toBe(options[0]);
      expect(firstTodo).toBeInTheDocument();
      expect(secondTodo).toBeInTheDocument();
    });
  });
});
