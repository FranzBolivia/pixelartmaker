// Select color input
var color;
// Select size input
var row,col;
//Read the dimensions of the grid
function foo() {
    row = document.getElementById('inputHeight').value
    col = document.getElementById('inputWidth').value
    tableCreate(row,col);
    return true;
 }
// When size is submitted by the user, call makeGrid()

function tableCreate(row,col) {
  
    imagen = document.getElementById('pixelCanvas');	
    //check if the table does not already exist
    if (imagen){
      padre = imagen.parentNode;
    padre.removeChild(imagen);}
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.setAttribute("id", 'pixelCanvas'); 
    tbl.style.width = '80%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < row; i++) {
      var tr = document.createElement('tr');
      tr.setAttribute("id", "Row"+i)
      for (var j = 0; j < col; j++) {
          var td = document.createElement('td');
          tr.appendChild(td)
          td.setAttribute("id", "Cel"+i+"."+j);           //  the table with the requested dimensions is inserted     
      }
      tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
    asingEvents(row,col);  //Call the function that adds the onclick events
  }


//Function that helps the onclick events

function asingEvents(row,col){

    for (var i = 0; i < row; i++) {
       for (var j = 0; j < col; j++) {
          var elemento = document.getElementById("Cel"+i+"."+j);
            elemento.onclick = function(){        
              color=document.getElementById("colorPicker")   // Retrieves the value of the color picker
              this.setAttribute("style","background-color:"+color.value)  //Change the cell color
             };
      }  
    }
  }
 

function limpiar(){
console.log("llego");
    for (var i = 0; i < row; i++) {
       for (var j = 0; j < col; j++) 
       {
          var elemento = document.getElementById("Cel"+i+"."+j);
            elemento.setAttribute("style","background-color:#ffffff")  //Change the cell to defaultcolor
       };
      }  
}


 
