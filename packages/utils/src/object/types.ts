export type ObjectKeys<T extends Record<PropertyKey, T[keyof T]>> = Exclude<
  keyof T,
  symbol
>;

export type ObjectValues<T extends Record<PropertyKey, T[keyof T]>> =
  T[keyof T];
