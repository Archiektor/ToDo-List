// Count amount of numbers in array
/*
const euros = [29.76, 41.85, 46.5];
const sum = euros.reduce((prev, curr, index, array) => {
    console.log(`prev is ${prev}, current is ${curr}, index - ${index}`);
    return prev + curr;
});
console.log(`sum is ${sum}`);
*/

// Count amount of elements in array
/*
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];
const count = fruitBasket.reduce((tally, fruit) => {
    if (!tally[fruit]) {
        tally[fruit] = 1;
        console.log(tally);
    } else {
        tally[fruit] += 1;
        console.log(tally);
    }
    return tally;
}, {});

console.log(count);
*/

// Reduce few arrays in one
/*
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flat = data.reduce((total, current) => {
    console.log(current);
    return total.concat(current);
}, []);

console.log(flat);

 */
