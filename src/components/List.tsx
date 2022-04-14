import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../atom';

function List() {
  const todoList = useRecoilValue(todoListState);
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default List;
