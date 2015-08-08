addEvent(window, "load", function() {
  // just for the debug button
  addEvent(document.getElementById("play"), "click", function() {
    changeMap(outsideOffice);
    this.remove();
  });
});