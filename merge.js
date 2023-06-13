function merge(arr1, arr2) {
  let i = j = 0;
  const mergedArr = [];
  while(i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    }
    else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }
  if (i < arr1.length) {
    mergedArr.push(...arr1.slice(i));
  }
  else {
    mergedArr.push(...arr2.slice(j));
  }
  return mergedArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const midpoint = Math.floor(arr.length / 2);
  const leftHalf = mergeSort(arr.slice(0, midpoint));
  const rightHalf = mergeSort(arr.slice(midpoint));
  return merge(leftHalf, rightHalf);
}

module.exports = { merge, mergeSort};