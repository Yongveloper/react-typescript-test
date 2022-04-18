import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TodoFilters from '../TodoFilters';

describe('<TodoFilters />', () => {
  const options = ['Show All', 'Show Completed', 'Show Uncompleted'];
  const onChange = jest.fn();

  it('has a select and three options', () => {
    render(<TodoFilters selected={options[0]} onChange={onChange} />);
    const select = screen.getByRole('combobox');
    const option1 = screen.getByRole('option', { name: options[0] });
    const option2 = screen.getByRole('option', { name: options[1] });
    const option3 = screen.getByRole('option', { name: options[2] });

    expect(select).toBeInTheDocument();
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
  });

  it('calls onChange', () => {
    render(<TodoFilters selected={options[0]} onChange={onChange} />);
    const select = screen.getByRole('combobox');

    fireEvent.change(select, {
      target: {
        value: options[2],
      },
    });

    expect(onChange).toBeCalled();
  });
});
