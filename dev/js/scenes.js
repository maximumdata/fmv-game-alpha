// CONSTRUCTOR

function scene() {//src, n, s, e, w) {
  this.videoSrc = "";
  this.north = "";
  this.south = "";
  this.east = "";
  this.west = "";
  
  this.init = function(src, n, s, e, w) {
    this.videoSrc = "assets/videos/"+src+".mp4";
    this.north = n;
    this.south = s;
    this.east = e;
    this.west = w;  
  };
  
  this.changeVid = function() {
    var player = document.getElementById("player"),
        vidSource = document.getElementById("source"),
        
        // Get new values from this object's properties
        newVid = this.videoSrc,
        newNorth = this.north,
        newSouth = this.south,
        newEast = this.east,
        newWest = this.west;
        
    // Handle switching video sources to the new one
    
    vidSource.setAttribute("src", newVid);
    player.load();
    //player.play();
    
    // Set the current scene to this new one (nav controls are in relation to the current scene)
    currentScene = this;
    
  };
}

// LIST OF SCENES

var easttest = new scene(),
    westtest = new scene(),
    defaultVid = new scene(),
    currentScene = new scene();
    
easttest.init("east", "", "", "", defaultVid);
westtest.init("west", "", "", defaultVid, "");
defaultVid.init("default", "", "", easttest, westtest);