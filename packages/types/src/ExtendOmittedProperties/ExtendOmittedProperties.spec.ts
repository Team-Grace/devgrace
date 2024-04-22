import { describe, expectTypeOf, it } from 'vitest';
import { ExtendOmittedProperties } from '.';

describe('ExcludeNullish', () => {
  it('should omit properties from the first generic type using Omit and extend the omitted properties.', () => {
    type TestType = { foo: string; bar: number };

    const test: ExtendOmittedProperties<TestType, { bar: string }> = {
      foo: 'foo',
      bar: 'bar',
    };

    // toEqualTypeOf 이슈로 우회 테스트
    expectTypeOf(test as { foo: string; bar: string }).toEqualTypeOf<{
      foo: string;
      bar: string;
    }>();
  });
});
