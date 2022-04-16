import React, { useCallback, useState } from 'react';

interface ITodoFormProps {
  onInsert: (value: string) => void;
}

function TodoForm({ onInsert }: ITodoFormProps) {
  const [inputValue, setInputValue] = useState('');

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  }, []);

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
        type="text"
        placeholder="오늘의 할 일"
        value={inputValue}
        onChange={onChange}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoForm;
