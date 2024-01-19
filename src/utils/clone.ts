import { Assignable } from '../types/assignable.js';

export function deepClone<T>(object: T): T {
	if (object === null || typeof object !== 'object') return object;

	if (Array.isArray(object)) {
		return (object as Array<unknown>).map((item) => deepClone(item)) as T;
	}

	const newObject: Record<keyof Assignable, any> = {};

	for (const key in object) {
		if (Object.prototype.hasOwnProperty.call(object, key)) {
			newObject[key] = deepClone(object[key]);
		}
	}

	return newObject as T;
}
