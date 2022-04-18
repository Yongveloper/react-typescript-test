import { memo } from 'react';
import { filterOptions } from '../ultils';

interface ITodoFiltersProps {
  selected: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function TodoFilters({ selected, onChange }: ITodoFiltersProps) {
  return (
    <select value={selected} onChange={onChange}>
      {filterOptions.map((option) => (
        <option key={option.key} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default memo(TodoFilters);
