// CONSTRUCTOR

function scene() {//src, n, s, e, w) {
  this.videoSrc = "";
  this.north = "";
  this.south = "";
  this.east = "";
  this.west = "";
  
  this.init = function(src, n, s, e, w) {
    this.videoSrc = "assets/videos/"+src;
    this.north = n;
    this.south = s;
    this.east = e;
    this.west = w;  
  };
  
  this.changeVid = function() {
    var player = document.getElementById("player"),
        oldSource = document.getElementById("source"),
        newSource = document.createElement("source"),
        
        // Get new values from this object's properties
        newVid = this.videoSrc,
        newNorth = this.north,
        newSouth = this.south,
        newEast = this.east,
        newWest = this.west;
        
    // Handle switching video sources to the new one
    oldSource.remove();
    
    newSource.setAttribute("src", newVid);
    newSource.setAttribute("id", "source");
    
    player.appendChild(newSource);
    
    player.load();
    
    currentScene = this;
    
    // Handle switching navigation
    /*if(newEast) {
      eastBtn.onclick = newEast.changeVid;
    } if (newWest) {
      westBtn.onclick = newWest.changeVid;
    }*/
    
  };
}

// LIST OF SCENES

var easttest = new scene(),
    westtest = new scene(),
    defaultVid = new scene(),
    currentScene;
    
easttest.init("east.mp4", "", "", "", defaultVid);
westtest.init("west.mp4", "", "", defaultVid, "");
defaultVid.init("default.mp4", "", "", easttest, westtest);