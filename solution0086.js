function arrayPlusArray(arr1, arr2) {
    const sum = arr1.reduce((a, b) => a + b, 0) + arr2.reduce((a, b) => a + b, 0);
    return sum;
    }