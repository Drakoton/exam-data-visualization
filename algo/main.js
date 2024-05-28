function twoSum(array, target) {
    const numIndices = {};

    for (let i = 0; i < array.length; i++) {
        const complement = target - array[i];

        if (complement in numIndices) {
            return [numIndices[complement], i];
        }

        numIndices[array[i]] = i;
    }

}
