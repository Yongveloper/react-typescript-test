import { memo } from 'react';

interface ITodoFiltersProps {
  selected: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function TodoFilters({ selected, onChange }: ITodoFiltersProps) {
  const options = [
    { name: 'Show All', key: 'all' },
    { name: 'Show Completed', key: 'completed' },
    { name: 'Show Uncompleted', key: 'uncompleted' },
  ];

  return (
    <select value={selected} onChange={onChange}>
      {options.map((option) => (
        <option key={option.key} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default memo(TodoFilters);
