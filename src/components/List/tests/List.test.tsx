import { render } from '@testing-library/react';
import List from '../List';

describe('List', () => {
  it('renders tasks', () => {
    const tasks = [
      { id: 1, title: 'TDD공부' },
      { id: 2, title: '1번 개발자' },
    ];

    const { container } = render(<List tasks={tasks} />);

    expect(container).toHaveTextContent('TDD공부');
    expect(container).toHaveTextContent('1번 개발자');
  });
});
