function sortArray(numbers, order) {
    if (order === "asc") {
        return numbers.slice().sort((a, b) => a - b);
    } else if (order === "desc") {
        return numbers.slice().sort((a, b) => b - a);
    } else {
        console.log("Invalid order. Please specify 'asc' for ascending or 'desc' for descending.");
        return numbers.slice();
    }
}

const numbers = [5, 2, 8, 1, 9];
console.log(sortArray(numbers, "asc")); // Output: [1, 2, 5, 8, 9]
console.log(sortArray(numbers, "desc")); // Output: [9, 8, 5, 2, 1]
