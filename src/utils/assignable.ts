import { Assignable } from '../types/assignable.js';

export function isAssignable(value: any): value is Assignable {
	return value?.constructor === Object;
}
