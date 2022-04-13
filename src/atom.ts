import { atom } from 'recoil';

export interface IToDo {
  id: number;
  text: string;
  isComplete: boolean;
}

export const todoListState = atom<IToDo[]>({
  key: 'todoListState',
  default: [{ id: 1, text: '임시 투두', isComplete: false }],
});
