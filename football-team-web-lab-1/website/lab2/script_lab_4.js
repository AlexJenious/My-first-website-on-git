function task1() {
    let n = parseFloat(prompt("Введіть значення n: "));
    let x = [];
    let sum = 0.0;
    for (let i = 0; i < n; i++) {
        x[i] = parseFloat(prompt("Введіть значення x[" + (i + 1) + "]: "))
        sum += x[i];
    }
    let res = sum / n;
    document.write("<h2>Результати обчислення середнього арифметичного</h2>");
    document.write("<table border='1' cellpadding='5' style='border-collapse: collapse;'>");
    document.write("<tr><th>Номер</th><th>Число</th></tr>");

    for (let i = 0; i < n; i++) {
        document.write(`<tr><td>x[${i+1}]</td><td>${x[i]}</td></tr>`);
    }

    document.write("</table>");
    document.write(`<h3>Сума чисел: ${sum}</h3>`);
    document.write(`<h3>Середнє арифметичне: ${res.toFixed(2)}</h3>`);
}
task1();

// task 2
function generateMatrix() {
    const n = parseInt(document.getElementById("rows").value);
    const m = parseInt(document.getElementById("cols").value);
    const container = document.getElementById("matrixInputs-task2");

    container.innerHTML = "<h4>Введіть елементи матриці (за бажанням):</h4>";
    const table = document.createElement("table");
    table.style.margin = "10px auto";

    for (let i = 0; i < n; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < m; j++) {
            const cell = document.createElement("td");
            const userInput = document.createElement("input");
            userInput.type = "number";
            userInput.id = `cell1-${i}-${j}`;
            userInput.placeholder = `0`;
            cell.appendChild(userInput);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    container.appendChild(table);
}

function calculateMatrix() {
    const n = parseInt(document.getElementById("rows").value);
    const m = parseInt(document.getElementById("cols").value);
    let res = "<table style='margin:auto; border-collapse:collapse;'>";
    let e = 2.72;
    for (let i = 0; i < n; i++) {
        res += "<tr>";
        for (let j = 0; j < m; j++) {
            const userInput = document.getElementById(`cell1-${i}-${j}`);
            let value;
            if (userInput && userInput.value !== "") {
                value = parseFloat(userInput.value);
            } else {
                value = (Math.pow(e, i)) - j;
            }
            res += `<td style='border:1px solid black; padding: 5px;'>${value.toFixed(2)}</td>`;
        }
        res += "</tr>";
    }
    res += "</table>";

    document.getElementById("res-task2").innerHTML = res;
}

// task 3
function generateMatrix2() {
    const n = parseInt(document.getElementById("rows2").value);
    const m = parseInt(document.getElementById("cols2").value);
    const container = document.getElementById("matrixInputs-task3");

    container.innerHTML = "<h4>Введіть елементи матриці:</h4>";
    const table = document.createElement("table");
    table.style.margin = "10px auto";

    for (let i = 0; i < n; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < m; j++) {
            const cell = document.createElement("td");
            const userInput = document.createElement("input");
            userInput.type = "number";
            userInput.id = `cell2-${i}-${j}`;
            userInput.placeholder = `0`;
            userInput.value = `-12`;
            cell.appendChild(userInput);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    container.appendChild(table);
}
function calculate2() {
    const n = parseInt(document.getElementById("rows2").value);
    const m = parseInt(document.getElementById("cols2").value);
    let res = "<table style='margin:auto; border-collapse:collapse;'>";
    let ans = 1;
    for (let i = 0; i < n; i++) {
        res += "<tr>";
        for (let j = 0; j < m; j++) {
            const userInput = document.getElementById(`cell2-${i}-${j}`);
            let value = parseFloat(userInput.value);
            if (value < 0 && i % 2 !== 0 && j % 2 !== 0) {
                ans *= value;
                res += `<td style='border:1px solid black; padding: 5px; background: greenyellow;'>${value.toFixed(2)}</td>`;
            }
            else {
                res += `<td style='border:1px solid black; padding: 5px;'>${value.toFixed(2)}</td>`;
            }
        }
        res += "</tr>";
    }
    res += "</table>";
    res += `<h4>Завдання: обчислити добуток від’ємних елементів матриці з обома непарними індексами.</h4>`;
    res += `<h3>Результат: ${ans}</h3>`
    document.getElementById("res-task3").innerHTML = res;

}