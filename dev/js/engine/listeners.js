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
  addEvent(document.querySelector('body'), "click", function(e) {
    if (e.target.mapToChangeTo) {
      changeMap(e.target.mapToChangeTo);
    }
    if (e.target.sceneToChangeTo) {
      e.target.sceneToChangeTo.changeScene();
    }
  });
});
