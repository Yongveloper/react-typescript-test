import { useSetRecoilState } from 'recoil';
import { todoListState } from './atom';
import List from './components/List';
import TodoItemCreator from './components/TodoItemCreator';

function App() {
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = (text: string) => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      { id: Date.now(), text, isComplete: false },
    ]);
  };

  return (
    <div>
      <h1>To-DO</h1>
      <TodoItemCreator onInsert={addItem} />
      <List />
    </div>
  );
}

export default App;
