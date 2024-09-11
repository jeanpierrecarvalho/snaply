// @ts-expect-error Todo: Solve types here
function deepClone(obj, seen = new WeakMap()) {
  // Handle primitive types and null
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // Handle circular references
  if (seen.has(obj)) {
    return seen.get(obj)
  }

  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj.getTime())
  }

  // Handle RegExp
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags)
  }

  // Handle Buffer (node.js specific)
  if (Buffer.isBuffer(obj)) {
    return Buffer.from(obj)
  }

  // Handle Map
  if (obj instanceof Map) {
    const result = new Map()
    seen.set(obj, result)
    obj.forEach((value, key) => {
      result.set(key, deepClone(value, seen))
    })
    return result
  }

  // Handle Set
  if (obj instanceof Set) {
    const result = new Set()
    seen.set(obj, result)
    obj.forEach(value => {
      result.add(deepClone(value, seen))
    })
    return result
  }

  // Handle Symbol
  if (typeof obj === 'symbol') {
    return Symbol(obj.description)
  }

  // Skip functions
  if (typeof obj === 'function') {
    return undefined
  }

  // Handle Array
  if (Array.isArray(obj)) {
    // @ts-expect-error Todo: Solve types here
    const arrCopy = []
    // @ts-expect-error Todo: Solve types here
    seen.set(obj, arrCopy)
    obj.forEach((item, index) => {
      arrCopy[index] = deepClone(item, seen)
    })
    // @ts-expect-error Todo: Solve types here
    return arrCopy
  }

  // Handle plain objects

  const objCopy = {}
  seen.set(obj, objCopy)
  Object.keys(obj).forEach(key => {
    const value = obj[key]

    // Skip cloning functions
    if (typeof value !== 'function') {
      // @ts-expect-error Todo: Solve types here
      objCopy[key] = deepClone(value, seen)
    }
  })

  return objCopy
}

export default deepClone
