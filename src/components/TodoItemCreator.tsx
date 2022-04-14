import React, { useCallback, useState } from 'react';
import { useSetRecoilState } from 'recoil';

interface ITodoItemCreatorProps {
  onInsert: (text: string) => void;
}

function TodoItemCreator({ onInsert }: ITodoItemCreatorProps) {
  const [inputValue, setInputValue] = useState('');

  const onChange = useCallback(
    ({ currentTarget: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(value);
    },
    []
  );

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      onInsert(inputValue);
      setInputValue('');
      event.preventDefault();
    },
    [onInsert, inputValue]
  );

  return (
    <form onSubmit={onSubmit}>
      <input
        data-testid="todo_input"
        type="text"
        value={inputValue}
        placeholder="오늘 할 일"
        onChange={onChange}
      />
      <button>추가</button>
    </form>
  );
}

export default TodoItemCreator;
