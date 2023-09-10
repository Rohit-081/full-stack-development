function zigZag(arr, n) {
  let temp;
  for (let i = 0; i < n; i + 2) {
    if (arr[i - 1] > arr[i]) {
      temp = arr[i - 1];
      arr[i - 1] = arr[i];
      arr[i] = temp;
    }
    if (i + 1 < n && arr[i + 1] > arr[i]) {
      temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
    }
  }
  return console.log(arr);
}

zigZag([4, 3, 7, 8, 6, 2, 1], 7);