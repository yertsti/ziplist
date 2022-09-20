const testArr1 = ['a', 'b', 'c'];
const testArr2 = [1, 2, 3];
function zipList(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return 'arrays need to be same length';
  }
  const tempArr = [];
  for (let i = 0; i < arr1.length; i++) {
    tempArr[0 + 2 * i] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    tempArr[1 + 2 * i] = arr2[i];
  }
  return tempArr;
}
function zipListTheEasyWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}
console.log(zipList(testArr1, testArr2));
console.log(zipListTheEasyWay(testArr1, testArr2));
