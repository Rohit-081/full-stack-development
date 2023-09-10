var twoSum1 = function (nums, target) {
  const arr = []; //created empty array

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];
      if (target === sum) {
        arr.push(i);
        arr.push(j);
        break;
      }
    }
  }

  return console.log(arr);
};

twoSum1([2, 7, 11, 15], 9);

//Efficient Solution
const twoSum = function (nums, target) {
  //Create an empty array.
  const comp = [];
  //Initialize a loop
  for (let i = 0; i < nums.length; i++) {
    //First check the num element in comp as index is greater than zero or not.
    if (comp[nums[i]] >= 0) {
      return console.log([comp[nums[i]], i]);
    }
    comp[target - nums[i]] = i;
  }
};

twoSum([2, 11, 7, 15], 9);
