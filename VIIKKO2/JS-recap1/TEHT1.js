function convertTemperature() {
    const celsiusInput = document.getElementById("celsius").value;
    const fahrenheit = (celsiusInput * 9/5) + 32;
    const kelvin = parseFloat(celsiusInput) + 273.15;
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <p><strong>Temperature in Fahrenheit:</strong> ${fahrenheit.toFixed(2)} °F</p>
        <p><strong>Temperature in Kelvin:</strong> ${kelvin.toFixed(2)} K</p>
    `;
}
