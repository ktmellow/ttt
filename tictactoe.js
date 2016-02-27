console.log("hello, there!");

var count = 0;

// All cells pushed into an array.
var cells = [];
cells.push(document.querySelector('#cell0'));
cells.push(document.querySelector('#cell1'));
cells.push(document.querySelector('#cell2'));
cells.push(document.querySelector('#cell3'));
cells.push(document.querySelector('#cell4'));
cells.push(document.querySelector('#cell5'));
cells.push(document.querySelector('#cell6'));
cells.push(document.querySelector('#cell7'));
cells.push(document.querySelector('#cell8'));

// Add click event listener to all cells.
// Add X or O on alternation
function placeMarker(e) {
  if ( count % 2 === 0) {
    e.target.innerText = "X";
    count += 1;
    e.target.removeEventListener('click', placeMarker);
  } else {
    e.target.innerText = "O";
    count += 1;
    e.target.removeEventListener('click', placeMarker);
  } 
}

for (var cell=0; cell < cells.length; cell++) {
  cells[cell].addEventListener('click', placeMarker);
}

// Figure out win. But only if count > 4;