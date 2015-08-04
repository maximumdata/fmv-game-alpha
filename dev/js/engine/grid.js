var gridOnOff;
function grid(size) {
  if(!gridOnOff) {
    var gridContainer = document.createElement("DIV");
    gridContainer.setAttribute("id","gridContainer");
    gridContainer.style.position = "fixed";
    gridContainer.style.zIndex = "100";
    gridContainer.style.top = "0px";
    gridContainer.style.bottom = "0px";
    gridContainer.style.left = "0px";
    gridContainer.style.right = "0px";
    gridContainer.style.background = "rgba(255,255,255,.5)";
    document.body.appendChild(gridContainer);
    if(!size) {
      for(var x = 10; x <= 90; x+=10) {
        var hor = document.createElement("DIV");
        hor.setAttribute("id", "hor"+x);
        hor.style.position = "absolute";
        hor.style.height = "1px";
        hor.style.width = "100%";
        hor.style.background = "black";
        hor.style.top = "calc("+x+"% - 1px)";
        gridContainer.appendChild(hor);
        
        var vert = document.createElement("DIV");
        vert.setAttribute("id", "vert"+x);
        vert.style.position = "absolute";
        vert.style.height = "100%";
        vert.style.width = "1px";
        vert.style.background = "black";
        vert.style.left = "calc("+x+"% - 1px)";
        gridContainer.appendChild(vert);
      }
    } else {
      for(var y = size; y <= 90; y+=size) {
        var horSize = document.createElement("DIV");
        horSize.setAttribute("id", "horSize"+y);
        horSize.style.position = "absolute";
        horSize.style.height = "1px";
        horSize.style.width = "100%";
        horSize.style.background = "black";
        horSize.style.top = "calc("+y+"% - 1px)";
        gridContainer.appendChild(horSize);
        
        var vertSize = document.createElement("DIV");
        vertSize.setAttribute("id", "vertSize"+y);
        vertSize.style.position = "absolute";
        vertSize.style.height = "100%";
        vertSize.style.width = "1px";
        vertSize.style.background = "black";
        vertSize.style.left = "calc("+y+"% - 1px)";
        gridContainer.appendChild(vertSize);
      }
    }
    gridOnOff = 1;
  } else { var gC = document.getElementById("gridContainer"); gC.remove(); gridOnOff = 0; }
}
