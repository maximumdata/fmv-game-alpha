function addEvent(to, type, fn) {
  if(to) {
    if(document.addEventListener) {
      to.addEventListener(type, fn);
    } else if(document.attachEvent) {
      to.attachEvent('on'+type, fn);
    } else {
      to['on'+type] = fn;
    }
  }
}


// Assign elements after page loads
  
addEvent(window, "load", function() {
  eastBtn = document.getElementById("east");
  westBtn = document.getElementById("west");
  
  addEvent(play, "click", function() {
    defaultVid.changeVid();
  });
  
  addEvent(eastBtn, "click", function() {
    currentScene.east.changeVid();
  });
  
  addEvent(westBtn, "click", function() {
    currentScene.west.changeVid();
  });
});