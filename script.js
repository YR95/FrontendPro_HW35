function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function generateTable(row, column) {
  const table = document.createElement("table");
  for (let i = 0; i < row; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < column; j++) {
      const td = document.createElement("td");
      td.innerText = getRandomInt(1, 100);
      td.style.padding = '20px';
      td.style.background = 'aqua'
      row.append(td);
    }
    table.append(row)
  }

  document.body.appendChild(table);

}

generateTable(10, 10);



