let columns = 2;
let rows = 1;
let table = document.getElementById("gameTable");

//add column
$("#addColumnChild").click(function () {
  let nameRow = document.getElementById("nameRow");
  let nameCell = document.createElement("th");
  nameCell.innerHTML = "<input placeholder='Name' onchange='calcScore()'>";
  nameRow.appendChild(nameCell);

  let ovrScoreRow = document.getElementById("ovrScoreRow");
  let ovrScoreCell = document.createElement("th");
  ovrScoreCell.innerHTML = "<div class='ovrScore'></div>";
  ovrScoreRow.appendChild(ovrScoreCell);

  let rowElements = document.getElementsByClassName("score-row");

  for (let i = 0; i < rowElements.length; i++) {
    let cell = document.createElement("td");
    cell.innerHTML = "<input class='score'>";
    rowElements[i].appendChild(cell);
  }
  columns += 1;
});

//add row
$("#addRowChild").click(function () {
  let row = document.createElement("tr");
  row.classList.add("score-row");
  row.setAttribute("id", "score-row-"+rows)

  for (let i = 0; i < columns; i++) {
    let cell = document.createElement("td");
    cell.innerHTML = `<input class='score player-${i}'>`;
    row.appendChild(cell);
  }
  table.appendChild(row);
  row+=1
  
  let scores = document.getElementsByClassName("ovrScore")
  for (let i = 0; i < scores.length; i++) {
    let div = scores[i]
    div.innerHTML = "35"
  }
});

//delete row
$("#deleteRowChild").click(function () {
  if(rows <= 2) 
    return
  
  document.getElementById("gameTable").deleteRow(-1);
  rows-=1
});

//delete column
$("#deleteColumnChild").click(function () {
  
  if(columns <= 2)
    return
  // Getting the rows in table.
  var row = table.rows;

  // Removing the column at index(1).
  var i = -1;
  for (var j = 0; j < row.length; j++) {
    // Deleting the ith cell of each row.
    row[j].deleteCell(i);
  }
  columns -= 1;
});


function calcScore()