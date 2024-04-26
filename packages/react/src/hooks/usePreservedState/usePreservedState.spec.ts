import { renderHook } from '@testing-library/react';
import { usePreservedState } from '.';

describe('usePreservedState', () => {
  describe('Default Comparator Callback', () => {
    it('should maintain the same state and reference if the values are identical.', () => {
      const originObj = { group: 'modern-agile' };
      const targetObj = { group: 'modern-agile' };

      const { result, rerender } = renderHook(
        ({ value }) => usePreservedState(value),
        {
          initialProps: { value: originObj },
        }
      );

      rerender({ value: targetObj });

      expect(result.current).toBe(originObj);
      expect(result.current).toEqual(originObj);
    });

    it('should update the state if the values change.', () => {
      const originObj = { group: 'modern-agile' };
      const targetObj = { group: 'frontend' };

      const { result, rerender } = renderHook(
        ({ value }) => usePreservedState(value),
        {
          initialProps: { value: originObj },
        }
      );

      rerender({ value: targetObj });

      expect(result.current).toBe(targetObj);
      expect(result.current).toEqual(targetObj);
    });
  });

  describe('Custom Comparator Callback', () => {
    it('should not update the state and should maintain the reference if the comparator returns true.', () => {
      const comparator = (a: any, b: any) => a.group === b.group;

      const originObj = { group: 'modern-agile', title: 'origin' };
      const changedObj = { group: 'modern-agile', title: 'change' };

      const { result, rerender } = renderHook(
        ({ value }) => usePreservedState(value, comparator),
        {
          initialProps: { value: originObj },
        }
      );

      rerender({ value: changedObj });

      expect(result.current).toBe(originObj);
      expect(result.current).toEqual(originObj);
    });

    it('should update the state if the comparator returns false.', () => {
      const comparator = (a: any, b: any) => a.group === b.group;

      const originObj = { group: 'modern-agile', title: 'origin' };
      const changedObj = { group: 'frontend', title: 'change' };

      const { result, rerender } = renderHook(
        ({ value }) => usePreservedState(value, comparator),
        {
          initialProps: { value: originObj },
        }
      );

      rerender({ value: changedObj });

      expect(result.current).toBe(changedObj);
      expect(result.current).toEqual(changedObj);
    });
  });
});
