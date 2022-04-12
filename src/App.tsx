import List from './components/List/List';

function App() {
  const tasks = [
    { id: 1, title: 'TDD공부' },
    { id: 2, title: '1번 개발자' },
  ];
  return (
    <div>
      <h1>To-DO</h1>
      <List tasks={tasks} />
    </div>
  );
}

export default App;
