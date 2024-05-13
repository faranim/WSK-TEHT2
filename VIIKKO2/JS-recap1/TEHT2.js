function calculateDistance() {
    const pointsInput = document.getElementById("points").value;
    const [x1, y1, x2, y2] = pointsInput.split(',').map(parseFloat);
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `The distance between (${x1},${y1}) and (${x2},${y2}) is ${distance.toFixed(2)}`;
}
