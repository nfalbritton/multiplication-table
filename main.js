class MultiplicationTable {

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  putMultiplicationTableInto(mainPage) {
    let table = document.getElementById(mainPage);

    for(var i = 0; i< this.height; i++)
    {
      let row = table.insertRow(i);
      for(var j = 0; j < this.width; j++) {
        var cell = row.insertCell(j);
        cell.innerHTML = (j+1)*(i+1);
      }
    }
  }
}

let multiplicationTable = new MultiplicationTable(12,12);

multiplicationTable.putMultiplicationTableInto("myTable");
