/**
 * Determines if the provided `value` is classified as a `object` object.
 *
 * @since 1.0.1
 * @param {unknown} value - The value to be checked.
 * @returns {boolean} `true` if the value is a object, otherwise `false`.
 */

const isObject = (value: unknown): boolean =>
  typeof value === "object" || typeof value === "function";

export default isObject;
