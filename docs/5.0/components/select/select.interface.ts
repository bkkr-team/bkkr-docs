export type SelectInterface = 'drawer' | 'popover' | 'alert';

export type SelectCompareFn = (currentValue: any, compareValue: any) => boolean;

export interface SelectChangeEventDetail<T = any> {
  value: T;
}