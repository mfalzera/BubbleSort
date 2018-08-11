// based on Joshua Fluke tutorial at https://goo.gl/j76Y7D

// array to sort
var items = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
var items_save = [9, 2, 5];

function bubbleSort(items) {
    var arrayLength = items.length;

    // outer loop
    for (var firstLoopPosition = 0; firstLoopPosition < arrayLength; firstLoopPosition++) {
        console.log("outer loop count: " + firstLoopPosition);

        for (var secondLoopPosition = 0; secondLoopPosition < (arrayLength - firstLoopPosition -1); secondLoopPosition++) {
            console.log("inner loop count: " + secondLoopPosition + " up to index " + (arrayLength - firstLoopPosition -1));

            // compare the neighboring values
            if(items[secondLoopPosition] > items[secondLoopPosition+1]) {
                console.log("comparing " + items[secondLoopPosition] + " to " + items[secondLoopPosition+1]);
                console.log(items);

                // if it is, swap the numbers
                var tmp = items[secondLoopPosition];
                items[secondLoopPosition] = items[secondLoopPosition+1];
                items[secondLoopPosition+1] = tmp;
            } else {
                console.log("comparing " + items[secondLoopPosition+1]+ " to " + items[secondLoopPosition+1]);
                console.log(items);
            }

            console.log(items);
        }
    }
}

bubbleSort(items);