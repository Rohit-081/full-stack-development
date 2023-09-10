var reverseInGroups = function(arr, n, k){
  for(let i = 0; i < n; i += k){
    let left = i;
    //This is important to remenber.
    let right = Math.min(i+k - 1, arr.length - 1);
    while(left < right){
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return arr;
}

console.log(reverseInGroups([5, 6, 8, 9, 10, 11, 22],7, 3));
