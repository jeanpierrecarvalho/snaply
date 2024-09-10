/**
 * Determines if the provided `value` is classified as a `Function` object.
 *
 * @since 1.0.1
 * @param {unknown} value - The value to be checked.
 * @returns {boolean} `true` if the value is a function, otherwise `false`.
 */

const isFunction = (value: unknown): boolean => typeof value === "function";

export default isFunction;
