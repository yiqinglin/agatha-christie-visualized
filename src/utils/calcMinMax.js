export const calcMinMax = (objArray, key) => {
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  let tmp;

  for (const obj of objArray) {
    tmp = obj[key];
    if (tmp < min) min = tmp;
    if (tmp > max) max = tmp;
  }

  console.log(min, max);
  return [min, max];
}