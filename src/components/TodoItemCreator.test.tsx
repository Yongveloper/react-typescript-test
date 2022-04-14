import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderHook } from '@testing-library/react-hooks';
import TodoItemCreator from './TodoItemCreator';

describe('<TodoItemCreator />', () => {
  const setup = (props = {}) => {
    const utils = render(<TodoItemCreator {...props} />);
    const input = screen.getByTestId('todo_input');
    const button = screen.getByRole('button');
    return {
      ...utils,
      input,
      button,
    };
  };

  it('has input and button', () => {
    const { input, button } = setup();

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('changes input', () => {
    const { input } = setup();

    fireEvent.change(input, {
      target: {
        value: 'TDD 연습',
      },
    });

    expect(input).toHaveAttribute('value', 'TDD 연습');
  });

  it('calls onInsert and clears input', () => {
    const onInsert = jest.fn();
    const { input, button } = setup({ onInsert }); // props 가 필요 할땐 이렇게 직접 파라미터로 전달

    fireEvent.change(input, {
      target: {
        value: 'TDD 연습',
      },
    });
    fireEvent.click(button);

    expect(onInsert).toBeCalledWith('TDD 연습'); // onInsert 가 'TDD 배우기' 파라미터가 호출됐어야함
    expect(input).toHaveAttribute('value', ''); // input이 비워져야함
  });
});
