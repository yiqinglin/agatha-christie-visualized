/**
 *  Given an array of objects and an array of keys, returns the min/max value
 *  calculated from of all the property values in the objects for each key.
 *  @param {[Object]} objArray An array of objects.
 *  @param {[string]} keyArray An array of strings cooresponding to property keys contained in objArray.
 *  @return {Object} { key: [min, max] }
 * */ 
export const calcMinMax = (objArray, keyArray) => {
  let res = {};

  for (const key of keyArray) {
    res[key] = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY]
  }
  for (const obj of objArray) {
    for (const key of keyArray) {
      const value = obj[key];
      if (value < res[key][0]) res[key][0] = value;
      if (value > res[key][1]) res[key][1] = value;
    }
  }

  return res;
}