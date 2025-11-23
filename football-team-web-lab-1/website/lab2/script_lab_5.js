function SquareMatrix(size, elements) {
    this.size = size;
    if (elements) {
        this.elements = elements;
    } else {
        this.elements = [];
        for (let i = 0; i < size; i++) {
            this.elements[i] = [];
            for (let j = 0; j < size; j++) {
                this.elements[i][j] = i * 2 + j * 3;
            }
        }
    }

    this.display = function(containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        const table = document.createElement('table');
        table.style.border = '1px solid black';
        table.style.borderCollapse = 'collapse';
        table.style.margin = '10px';
        for (let i = 0; i < this.size; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < this.size; j++) {
                const cell = document.createElement('td');
                cell.textContent = this.elements[i][j];
                cell.style.border = '1px solid black';
                cell.style.padding = '8px';
                cell.style.textAlign = 'center';
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        container.appendChild(table);
    };

    this.transpose = function() {
        const transposed = new SquareMatrix(this.size);
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                transposed.elements[i][j] = this.elements[j][i];
            }
        }
        return transposed;
    };

    this.add = function(otherMatrix) {
        const res = new SquareMatrix(this.size);
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                res.elements[i][j] = this.elements[i][j] + otherMatrix.elements[i][j];
            }
        }
        return res;
    };

    this.subtract = function(otherMatrix) {
        const res = new SquareMatrix(this.size);
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                res.elements[i][j] = this.elements[i][j] - otherMatrix.elements[i][j];
            }
        }
        return res;
    };

    this.findMax = function() {
        let mx = this.elements[0][0];
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.elements[i][j] > mx) mx = this.elements[i][j];
            }
        }
        return mx;
    };

    this.multiplyByVector = function(vector) {
        const res = [];
        for (let i = 0; i < this.size; i++) {
            res[i] = 0;
            for (let j = 0; j < this.size; j++) {
                res[i] += this.elements[i][j] * vector[j];
            }
        }
        return res;
    };
}

function ShowMessage(containerId, message) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    container.innerHTML += message;
}

function showMaxCombined() {
    const mx = matrixA.findMax();
    ShowMessage('head-of-matrix', `<h3>Найбільший елемент: ${mx}</h3>`);
    matrixA.display('matrix-results');
}

let matrixA, matrixB;

function createMatrixInputs() {
    const size = parseInt(document.getElementById('matrixSize').value);
    const containerA = document.getElementById('matrixA-inputs');
    containerA.innerHTML = '';
    createMatrixInputGrid(containerA, size, 'A');

    const containerB = document.getElementById('matrixB-inputs');
    containerB.innerHTML = '';
    createMatrixInputGrid(containerB, size, 'B');

    const vectorContainer = document.getElementById('vector-inputs');
    vectorContainer.innerHTML = '';
    for (let i = 0; i < size; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.value = i + 1;
        input.style.width = '40px';
        input.style.margin = '2px';
        input.id = `vector-${i}`;
        vectorContainer.appendChild(input);
    }
    matrixA = createMatrixFromInputs(size, 'A');
    matrixB = createMatrixFromInputs(size, 'B');
}

function createMatrixFromInputs(size, matrixName) {
    const elements = [];
    for (let i = 0; i < size; i++) {
        elements[i] = [];
        for (let j = 0; j < size; j++) {
            const value = parseFloat(document.getElementById(`matrix${matrixName}-${i}-${j}`).value) || 0;
            elements[i][j] = value;
        }
    }
    return new SquareMatrix(size, elements);
}

function createMatrixInputGrid(container, size, matrixName) {
    const table = document.createElement('table');
    for (let i = 0; i < size; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('td');
            const input = document.createElement('input');
            input.type = 'number';
            if (matrixName === "A") {
                input.value = i * 12 + j + 14;
            }
            else if (matrixName === "B") {
                input.value = j * 3 + i * 14 + 11;
            }
            input.style.width = '40px';
            input.id = `matrix${matrixName}-${i}-${j}`;
            input.addEventListener('input', updateMatrix);
            cell.appendChild(input);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    container.appendChild(table);
}

function updateMatrix() {
    const size = parseInt(document.getElementById('matrixSize').value);

    const elementsA = [];
    for (let i = 0; i < size; i++) {
        elementsA[i] = [];
        for (let j = 0; j < size; j++) {
            const value = parseFloat(document.getElementById(`matrixA-${i}-${j}`).value) || 0;
            elementsA[i][j] = value;
        }
    }
    matrixA = new SquareMatrix(size, elementsA);

    const elementsB = [];
    for (let i = 0; i < size; i++) {
        elementsB[i] = [];
        for (let j = 0; j < size; j++) {
            const value = parseFloat(document.getElementById(`matrixB-${i}-${j}`).value) || 0;
            elementsB[i][j] = value;
        }
    }
    matrixB = new SquareMatrix(size, elementsB);
}

function displayMatrixA() {
    ShowMessage('head-of-matrix', '<h3>Матриця A:</h3>');
    matrixA.display('matrix-results');
}

function displayMatrixB() {
    ShowMessage('head-of-matrix', '<h3>Матриця B:</h3>');
    matrixB.display('matrix-results');
}

function transposeMatrixA() {
    const transposed = matrixA.transpose();
    ShowMessage('head-of-matrix', '<h3>Транспонована матриця A:</h3>');
    transposed.display('matrix-results');
}

function transposeMatrixB() {
    const transposed = matrixB.transpose();
    ShowMessage('head-of-matrix', '<h3>Транспонована матриця B:</h3>');
    transposed.display('matrix-results');
}

function sumMatrices() {
    const sum = matrixA.add(matrixB);
    ShowMessage('head-of-matrix', '<h3>Сума матриць A + B:</h3>');
    sum.display('matrix-results');
}

function subtractMatrices() {
    const difference = matrixA.subtract(matrixB);
    ShowMessage('head-of-matrix', '<h3>Різниця матриць A - B:</h3>');
    difference.display('matrix-results');
}

function multiplyMatrixByVector() {
    const size = parseInt(document.getElementById('matrixSize').value);
    const vector = [];
    for (let i = 0; i < size; i++) {
        vector.push(parseFloat(document.getElementById(`vector-${i}`).value) || 0);
    }
    const product = matrixA.multiplyByVector(vector);
    const res = document.getElementById('matrix-results');
    res.innerHTML = `<h3>Добуток матриці A на вектор [${vector.join(', ')}]:</h3>`;
    res.innerHTML += `<p>[${product.map(val => val.toFixed(2)).join(', ')}]</p>`;
}

document.addEventListener('DOMContentLoaded', function() {
    createMatrixInputs();
});

// task 2
const examLiteral = {
    subject: "Веб-технології",
    teacher: "Викладач Товтин",
    examDate: "13-12-2025",
    groupCode: "КН-2",
    display: function() {
        return `Предмет: ${this.subject}, Викладач: ${this.teacher}, Дата: ${this.examDate}, Група: ${this.groupCode}`;
    }
};

function Exam(subject, teacher, examDate, groupCode) {
    this.subject = subject;
    this.teacher = teacher;
    this.examDate = examDate;
    this.groupCode = groupCode;
    this.display = function() {
        return `Предмет: ${this.subject}, Викладач: ${this.teacher}, Дата: ${this.examDate}, Група: ${this.groupCode}`;
    };
}

function displayExamLiteral() {
    const res = document.getElementById('exam-results');
    res.innerHTML = `<h3>Літерал об'єкта "Складання екзаменів":</h3>`;
    res.innerHTML += `<p>${examLiteral.display()}</p>`;
}

function createExamWithConstructor() {
    const subject = document.getElementById('examSubject').value;
    const teacher = document.getElementById('examTeacher').value;
    const examDate = document.getElementById('examDate').value;
    const groupCode = document.getElementById('examGroup').value;
    const exam = new Exam(subject, teacher, examDate, groupCode);

    const res = document.getElementById('exam-results');
    res.innerHTML = `<h3>Об'єкт створений конструктором:</h3>`;
    res.innerHTML += `<p>${exam.display()}</p>`;
}