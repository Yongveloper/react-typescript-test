import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TodoForm from './TodoForm';

describe('<TodoForm />', () => {
  const setup = () => {
    const onInsert = jest.fn();
    render(<TodoForm onInsert={onInsert} />);
    const input = screen.getByPlaceholderText('오늘의 할 일');
    const button = screen.getByText('등록');

    return {
      input,
      button,
      onInsert,
    };
  };

  it('has input and a button', () => {
    const { input, button } = setup();

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('changes input', () => {
    const { input } = setup();

    fireEvent.change(input, {
      target: {
        value: 'TDD 배우기',
      },
    });

    expect(input).toHaveAttribute('value', 'TDD 배우기');
  });

  it('calls onInsert and clears input', () => {
    const { input, button, onInsert } = setup();

    fireEvent.change(input, {
      target: {
        value: 'TDD 배우기',
      },
    });
    fireEvent.click(button);

    expect(onInsert).toBeCalledWith('TDD 배우기');
    expect(input).toHaveAttribute('value', '');
  });
});
