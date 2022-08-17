let mergeSort = function (array) {
    if (array.length < 2) {
        return array;
    } else {
        // sort the left side of the array
        let leftArray = array.slice(0, Math.floor(array.length / 2));
        let sortedLeftArray = mergeSort(leftArray);
        console.log(sortedLeftArray);
        // sort the right side of the array
        let rightArray = array.slice(
            Math.floor(array.length / 2),
            array.length
        );
        let sortedRightArray = mergeSort(rightArray);
        console.log(sortedRightArray);
        // merge the two sides of the array
        let mergedArray = [];
        let mergeArrays = function () {
            while (
                sortedLeftArray.length != 0 ||
                sortedRightArray.length != 0
            ) {
                if (sortedLeftArray[0] < sortedRightArray[0]) {
                    mergedArray.push(sortedLeftArray[0]);
                    sortedLeftArray.shift();
                } else if (sortedRightArray[0] < sortedLeftArray[0]) {
                    mergedArray.push(sortedRightArray[0]);
                    sortedRightArray.shift();
                } else {
                    if (sortedLeftArray[0] == undefined) {
                        mergedArray.push(sortedRightArray[0]);
                        sortedRightArray.shift();
                    } else {
                        mergedArray.push(sortedLeftArray[0]);
                        sortedLeftArray.shift();
                    }
                }
            }
        };
        mergeArrays();
        console.log(mergedArray);
        return mergedArray;
    }
};
mergeSort([3, 9, 5, 8, 4, 7, 2]);
