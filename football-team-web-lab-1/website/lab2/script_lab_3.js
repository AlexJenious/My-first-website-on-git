function task1() {
    const a = parseInt(prompt("Введіть значення a:"));
    const b = parseInt(prompt("Введіть значення b:"));
    const c = parseInt(prompt("Введіть значення c:"));
    const n = parseInt(prompt("Введіть значення n:"));
    const x = parseInt(prompt("Введіть значення x:"));
    const y = parseInt(prompt("Введіть значення y:"));
    let result;
    let condition;
    if (a === c && c === n) {
        result = Math.cos(a + c + n);
        condition = "a = c = n";
    } else if (a < c && c === n) {
        result = Math.cos(a * c * n);
        condition = "a < c = n";
    } else if (a < c && c < n) {
        result = Math.cos((a + c) * n);
        condition = "a < c < n";
    } else {
        result = 0;
        condition = "інший випадок";
    }
    alert(`
    Завдання 1:
        Результат обчислення функції:
        Вхідні значення:
        A = ${a}
        B = ${b}
        C = ${c}
        N = ${n}
        X = ${x}
        Y = ${y}
        Умова: ${condition}
        Результат: y = ${result.toFixed(6)}
    `);
    return result;
}
function task2() {
    let a = [];
    let s;
    let cnt_paired = 0;
    let start = true;
    while (s !== "stop") {
        if (start) {
            alert("Якщо ви хочете зупинити, напишіть \"-1\"");
            start = false;
        }
        let cur = parseInt(prompt("Значення массива: "));
        if (cur === -1) break;
        else if (cur % 2 === 0) cnt_paired++;
        a.push(cur);
    }
    alert(`
    Завдання 2:
        Кількість парних: ${cnt_paired}
    `);
}
function task3() {
    let a = parseFloat(prompt("Введіть число: "));
    let res = a;
    if (a > 9 && a < 100) {
        if (a > 80) {
            res = a * 7;
        }
    }
    alert(`
    Завдання 3: 
        Початкове число a: ${a}
        Результат: ${res}
    `);
}
function task4() {
    const a = parseFloat(prompt("Введіть дійсне число a:"));
    const n = parseInt(prompt("Введіть натуральне число n:"));
    let sum = 0;
    let denominator = 1;
    for (let k = 0; k < n; k++) {
        denominator *= (a + k);
        const term = (2 * (k + 1)) / denominator;
        sum += term;
    }
    alert(`
    Завдання 4:
        a = ${a}, n = ${n}\nСума = ${sum}`);
}
task1();
task2();
task3();
task4();
