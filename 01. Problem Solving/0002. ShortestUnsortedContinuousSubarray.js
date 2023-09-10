/* Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.
Return the shortest such subarray and output its length. */

/* Example 1:

Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Example 2:

Input: nums = [1,2,3,4]
Output: 0
Example 3:

Input: nums = [1]
Output: 0
 */
var findUnsortedSubarray = function (nums) {
  // Initialize low with zero.
  let low = 0;
  // Initialize high with the length - 1.
  let high = nums.length - 1;
  // First While loop to check from left to right ascending.
  while (low + 1 < nums.length && nums[low] <= nums[low + 1]) low++;
  // Second While loop to check from right to left ascending.
  while (high - 1 >= 0 && nums[high - 1] <= nums[high]) high--;
  //This is edge case.
  if (low == nums.length - 1) return 0;

  // Initialize with Minimum Number.
  let wMin = Math.min();
  // Initialize with Maximum Number.
  let wMax = Math.max();

  //Getting the Min and Max no. in the internal array.
  for (let i = low; i <= high; i++) {
    wMin = Math.min(wMin, nums[i]);
    wMax = Math.max(wMax, nums[i]);
  }
  // Now traversing from right low to left.
  while (low - 1 >= 0 && nums[low - 1] > wMin) low--;
  // Here from high left to right.
  while (high + 1 <= nums.length - 1 && nums[high + 1] < wMax) high++;

  return console.log(high - low + 1);
};

findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]);

// Time Complexity O(n);
// Space Complexity constant.
