import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import List from './List';

describe('List Component', () => {
  it('renders Todos', () => {
    const { container } = render(
      <RecoilRoot>
        <List />
      </RecoilRoot>
    );

    expect(container).toHaveTextContent('임시 투두');
  });
});
