import { renderHook } from '@testing-library/react-hooks';
import { useRecoilValue, RecoilRoot } from 'recoil';
import { todoListState } from './atom';

describe('todoListState', () => {
  it('should initialise with a temporary object in array', () => {
    const { result } = renderHook(() => useRecoilValue(todoListState), {
      wrapper: RecoilRoot,
    });

    expect(result.current).toEqual([
      {
        id: 1,
        text: '임시 투두',
        isComplete: false,
      },
    ]);
  });
});
