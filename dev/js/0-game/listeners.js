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
  // just for the debug button
  addEvent(document.getElementById("play"), "click", function() {
    changeMap(newmap);
    this.remove();
  });
  
});
