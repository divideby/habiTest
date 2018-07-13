export function convertToCamelCase<T>(camelizedObject: any): T {
  const separators = [" ", "_"];
  const newObject = {} as T;
  Object.keys(camelizedObject).map(key => {
    let newKey = key;
    for (const separator of separators) {
      const splittedKey = key.split(separator);
      if (splittedKey.length > 1) {
        newKey = splittedKey.reduce(
          (prevKey, curKey, index) =>
            `${prevKey}${
              index === 0 ? curKey.charAt(0) : curKey.charAt(0).toUpperCase()
            }${curKey.slice(1)}`,
          ""
        );
      }
    }
    newObject[newKey] = camelizedObject[key];
  });

  return newObject;
}
