export function isNullish<T>(
  val: T | undefined | null
): val is undefined | null {
  return val == null;
}
