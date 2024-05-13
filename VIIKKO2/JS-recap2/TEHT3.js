const numbers = [];

let input = prompt("Enter a number (or 'done' to finish):");
while (input !== "done") {
    numbers.push(parseInt(input));
    input = prompt("Enter a number (or 'done' to finish):");
}

let evenNumbers = "";
for (const number of numbers) {
    if (number % 2 === 0) {
        evenNumbers += number + ", ";
    }
}

if (evenNumbers === "") {
    console.log("Even Numbers: None");
} else {
    evenNumbers = evenNumbers.slice(0, -2); // Remove the last comma and space
    console.log("Even Numbers:", evenNumbers);
}
