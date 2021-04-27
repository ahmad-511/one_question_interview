const initApp = () => {
    const ptArray = pascalsTriangle(16);
    domTriangle(ptArray);
}

document.addEventListener("DOMContentLoaded", initApp);

const pascalsTriangle = (rows = 3) => {
    if (rows < 3) rows = 3;
    const stackArray = [
        [1]
    ];
    let n = 1;
    while (n < rows) {

        const rowArray = [];
        let k = 0;
        let rowValue;
        while (k <= n) {
            rowValue =
                (stackArray[n - 1][k]??0) +
                (stackArray[n - 1][k - 1]??0);
            rowArray.push(rowValue);
            k++;
        }
        console.log(rowArray);
        stackArray.push(rowArray);
        n++;
    }
    console.log(stackArray);
    return stackArray;
}

const domTriangle = (array) => {
    const main = document.querySelector('main');

    array.forEach(subArr => {
        const row = buildRow(subArr);
        main.appendChild(row);
    })
}

const buildRow = (array) => {
    const row = document.createElement('div');
    row.classList.add("row");
    array.forEach(el => {
        const square = document.createElement('div');
        square.classList.add("square");
        square.textContent = el;
        if(el % 2){
            square.classList.add("odd");
        }
        row.appendChild(square);
    })
    return row;
}