declare function deepmerge<T0>(t0: Partial<T0>): T0;
declare function deepmerge<T0, T1>(t0: Partial<T0>, t1: Partial<T1>): T0 & T1;
declare function deepmerge<T0, T1, T2>(t0: Partial<T0>, t1: Partial<T1>, t2: Partial<T2>): T0 & T1 & T2;
declare function deepmerge<T0, T1, T2, T3>(t0: Partial<T0>, t1: Partial<T1>, t2: Partial<T2>, t3: Partial<T3>): T0 & T1 & T2 & T3;
declare function deepmerge<T0, T1, T2, T3, T4>(t0: Partial<T0>, t1: Partial<T1>, t2: Partial<T2>, t3: Partial<T3>, t4: Partial<T4>): T0 & T1 & T2 & T3 & T4;
declare function deepmerge<T0, T1, T2, T3, T4, T5>(t0: Partial<T0>, t1: Partial<T1>, t2: Partial<T2>, t3: Partial<T3>, t4: Partial<T4>, t5: Partial<T5>): T0 & T1 & T2 & T3 & T4 & T5;
declare function deepmerge<T0, T1, T2, T3, T4, T5, T6>(t0: Partial<T0>, t1: Partial<T1>, t2: Partial<T2>, t3: Partial<T3>, t4: Partial<T4>, t5: Partial<T5>, t6: Partial<T6>): T0 & T1 & T2 & T3 & T4 & T5 & T6;
declare function deepmerge<T0, T1, T2, T3, T4, T5, T6, T7>(t0: Partial<T0>, t1: Partial<T1>, t2: Partial<T2>, t3: Partial<T3>, t4: Partial<T4>, t5: Partial<T5>, t6: Partial<T6>, t7: Partial<T7>): T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7;
declare function deepmerge<T0, T1, T2, T3, T4, T5, T6, T7, T8>(t0: Partial<T0>, t1: Partial<T1>, t2: Partial<T2>, t3: Partial<T3>, t4: Partial<T4>, t5: Partial<T5>, t6: Partial<T6>, t7: Partial<T7>, t8: Partial<T8>): T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8;
declare function deepmerge<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(t0: Partial<T0>, t1: Partial<T1>, t2: Partial<T2>, t3: Partial<T3>, t4: Partial<T4>, t5: Partial<T5>, t6: Partial<T6>, t7: Partial<T7>, t8: Partial<T8>, t9: Partial<T9>): T0 & T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 & T9;

export { deepmerge as default };
