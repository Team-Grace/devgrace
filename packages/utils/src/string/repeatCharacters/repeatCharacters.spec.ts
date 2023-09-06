import { repeatCharacters } from '.';

describe('repeatCharacters', () => {
  it('should return a new string with each character repeated the repetition count times', () => {
    const str = 'A!B@C';
    const result = repeatCharacters(str, 2);

    expect(result).toBe('AA!!BB@@CC');
  });

  it('should return the input value if the repetition count is equal to or less than 1', () => {
    const str1 = 'Hello';
    const result1 = repeatCharacters(str1, 1);

    expect(result1).toBe(str1);

    const str2 = 'Test';
    const result2 = repeatCharacters(str2, 0);

    expect(result2).toBe(str2);

    const str3 = 'Test';
    const result3 = repeatCharacters(str2, -1);

    expect(result3).toBe(str3);
  });

  it('should return an empty string if the input string is empty', () => {
    const str = '';
    const result = repeatCharacters(str, 3);

    expect(result).toBe('');
  });
});
