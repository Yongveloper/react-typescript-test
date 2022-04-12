type ToDoType = {
  id: number;
  title: string;
};

interface ListProps {
  tasks: ToDoType[];
}

function List({ tasks }: ListProps) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}

export default List;
