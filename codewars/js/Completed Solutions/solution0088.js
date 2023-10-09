var increasingTriplet = function (nums) {
    // Loop through input array, starting from 3rd value
    for (i = 2; i <= nums.length; i++) {
        // If current value > previous value > previous previous value, return true
        const currentValue = nums[i],
              prevValue = nums[i - 1],
              prevPrevValue = nums[i - 2];

        if (currentValue > prevValue && prevValue > prevPrevValue) return true;
    }
    // Return false, because a triplet wasn't found
    return false;
};