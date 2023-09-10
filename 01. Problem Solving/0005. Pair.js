let arr = [10, 5, 2, 3, -6, 9, 11];
let s = new Set();
let sum = 4;
let val = 0;

for (let i = 0; i < arr.length; i++) {
  if (sum > arr[i]) {
    val = sum - arr[i];
  } else {
    val = arr[i] - sum;
  }
  if (s.has(val)) {
    console.log(val, arr[i]);
    break;
  }
  if (!s.has(arr[i])) {
    s.add(arr[i]);
  }
}
