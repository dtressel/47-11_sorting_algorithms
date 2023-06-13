function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let alteration = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        alteration = true;
      }
    }
    if (!alteration) break;
  }
  return arr;
}

module.exports = bubbleSort;