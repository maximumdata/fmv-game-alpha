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
  /*eastBtn = document.getElementById("east");
  westBtn = document.getElementById("west");
  northBtn = document.getElementById("north");
  southBtn = document.getElementById("south");*/
  play = document.getElementById("play");
  
  
  addEvent(play, "click", function() {
    changeMap(newmap);
    this.remove();
  });
  
  /*addEvent(navBtns, "click", function() {
    this.sceneToChangeTo;
  });*/
  
  /*addEvent(eastBtn, "click", function() {
    currentScene.east.changeScene();
  });
  
  addEvent(westBtn, "click", function() {
    currentScene.west.changeScene();
  });
  
  addEvent(northBtn, "click", function() {
    currentScene.north.changeScene();
  });
  
  addEvent(southBtn, "click", function() {
    currentScene.south.changeScene();
  });*/
});
