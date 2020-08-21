function reverseArray(array) {
    const reversed = [];
    for(let i = array.length - 1; i >= 0; i--)
        reversed.push(array[i]);
    return reversed;
};
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];