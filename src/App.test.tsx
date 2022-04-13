import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import App from './App';

describe('App', () => {
  it('renders tasks', () => {
    const { container } = render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    );

    expect(container).toHaveTextContent('To-DO');
  });
});
