// dprint-ignore-file
import { Assignable } from '../types/assignable.js';
import { isAssignable } from '../utils/assignable.js';
import { deepClone } from './clone.js';

export function deepmerge<T0>(t0: Partial<T0>): T0
export function deepmerge<T0, T1>(t0: Partial<T0>, t1: Partial<T1>): T0 & T1
export function deepmerge<T0, T1, T2>(t0: Partial<T0>, t1: Partial<T1>, t2: Partial<T2>): T0 & T1 & T2
export function deepmerge<T0, T1, T2, T3>(t0: Partial<T0>, t1: Partial<T1>, t2: Partial<T2>, t3: Partial<T3>): T0 & T1 & T2 & T3
export function deepmerge<T0, T1, T2, T3, T4>(t0: Partial<T0>, t1: Partial<T1>, t2: Partial<T2>, t3: Partial<T3>, t4: Partial<T4>): T0 & T1 & T2 & T3 & T4
export function deepmerge<T0, T1, T2, T3, T4, T5>(t0: Partial<T0>, t1: Partial<T1>, t2: Partial<T2>, t3: Partial<T3>, t4: Partial<T4>, t5: Partial<T5>): T0 & T1 & T2 & T3 & T4 & T5
export function deepmerge<T0, T1, T2, T3, T4, T5, T6>(t0: Partial<T0>, t1: Partial<T1>, t2: Partial<T2>, t3: Partial<T3>, t4: Partial<T4>, t5: Partial<T5>, t6: Partial<T6>): T0 & T1 & T2 & T3 & T4 & T5 & T6
export function deepmerge<T0, T1, T2, T3, T4, T5, T6, T7>(t0: Partial<T0>, t1: Partial<T1>, t2: Partial<T2>, t3: Partial<T3>, t4: Partial<T4>, t5: Partial<T5>, t6: Partial<T6>, t7: Partial<T7>): T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7
export function deepmerge<T0, T1, T2, T3, T4, T5, T6, T7, T8>(t0: Partial<T0>, t1: Partial<T1>, t2: Partial<T2>, t3: Partial<T3>, t4: Partial<T4>, t5: Partial<T5>, t6: Partial<T6>, t7: Partial<T7>, t8: Partial<T8>): T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8
export function deepmerge<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(t0: Partial<T0>, t1: Partial<T1>, t2: Partial<T2>, t3: Partial<T3>, t4: Partial<T4>, t5: Partial<T5>, t6: Partial<T6>, t7: Partial<T7>, t8: Partial<T8>, t9: Partial<T9>): T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9

export function deepmerge(...sources: Assignable[]): Assignable[] {
	const initialValue = deepClone(sources[0]);
	return sources.reduce(deepMergeTwoAssignable, initialValue) as Assignable[];
}

function deepMergeTwoAssignable(
	target: Assignable,
	source: Assignable,
) {
	Object.keys(source).forEach((key) => {
		if (isAssignable(target[key]) && isAssignable(source[key])) {
			return deepMergeTwoAssignable(target[key], source[key]); // merge them recursively
		}
		target[key] = source[key];
	});
	return target;
}
