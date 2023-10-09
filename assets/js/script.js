


let maTable = document.createElement("table");
document.body.appendChild(maTable);
for (let nbRows = 1; nbRows <= 10; nbRows++) {
    let uneRow = document.createElement("tr");
    maTable.appendChild(uneRow);
    for (let nbcells = 1; nbcells <= 10; nbcells++) {
        let uneCellule = document.createElement("td");
        uneCellule.innerText = (nbcells*nbRows).toString();
        uneRow.appendChild(uneCellule);
    }
}



