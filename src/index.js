function calculate(operation) {
    const num1 = document.getElementById("num1").value.trim();
    const num2 = document.getElementById("num2").value.trim();

    // Ensure inputs are converted to numbers
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById("result").innerText = "Result: Invalid input";
        return;
    }

    let result = 0;

    if (operation === "add") {
        result = number1 + number2;
        document.getElementById("operator").innerText = "+";
    } else if (operation === "subtract") {
        result = number1 - number2;
        document.getElementById("operator").innerText = "-";
    }

    // Ensure result is displayed correctly
    document.getElementById("result").innerText = `Result: ${result}`;
}

function resetFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operator").innerText = "+";
    document.getElementById("result").innerText = "Result: ";
}
