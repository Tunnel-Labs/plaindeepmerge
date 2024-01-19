function isAssignable(value) {
  return value?.constructor === Object;
}

function deepClone(object) {
  if (object === null || typeof object !== "object")
    return object;
  if (Array.isArray(object)) {
    return object.map((item) => deepClone(item));
  }
  const newObject = {};
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      newObject[key] = deepClone(object[key]);
    }
  }
  return newObject;
}

function deepmerge(...sources) {
  const initialValue = deepClone(sources[0]);
  return sources.reduce(deepMergeTwoAssignable, initialValue);
}
function deepMergeTwoAssignable(target, source) {
  Object.keys(source).forEach((key) => {
    if (isAssignable(target[key]) && isAssignable(source[key])) {
      return deepMergeTwoAssignable(target[key], source[key]);
    }
    target[key] = source[key];
  });
  return target;
}

export { deepmerge as default };
