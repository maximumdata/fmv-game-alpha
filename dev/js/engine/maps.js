// global variables -- to track game information
var currentMap;// = new map("","","");

function changeMap(newMap) {
  currentMap = newMap;
  currentMap.defaultScene.changeScene();
}

function map(maxX, maxY, start) {
  // create a two-dimensional array of coordinates to store scenes at different grid locations
  this.scenes = new Array(maxX);
  for( var i = 0; i <= maxX; i++ ) {
    this.scenes[i] = new Array(maxY);
  }
  
  // create a scene object at each xy coordinate (referenced via this.scenes[x][y])
  // also set the default scene for this map (expected string value for 'start' argument is xNUMBERyNUMBER)
  this.buildMap = function() {
    
    for( var i = 0; i <= maxX; i++ ) {
      for( var z = 0; z <= maxY; z++ ) {
        this.scenes[i][z] = new scene(i, z);
      }
    }
    
    var startX = start.substring(0, start.indexOf("y")).replace("x",""),
        startY = start.substring(start.indexOf("y")).replace("y","");
    this.defaultScene = this.scenes[startX][startY];
    
  };
  
  this.buildMap();
  
  function scene(x, y) {
    this.xPos = x;
    this.yPos = y;
    
    // construct an object to hold the scene's navigation. needs to contain positional information for each navigation element.
    function nav(p, navElements) {
      this.parentScene = p;
      this.navElementList = navElements;
      
      this.init = function() {
        var index,
            existingNavElements = document.getElementsByClassName("navBtn"),
            navElements = this.navElementList;
            
        for(index = 0; index < existingNavElements.length; index++) {
          existingNavElements[index].remove();
        }
        
        for(index = 0; index < navElements.length; index++) {
          console.log(navElements[index][0]);
          var newNavEl = document.createElement("BUTTON");
          newNavEl.setAttribute("class", "navBtn");
          newNavEl.style.top = navElements[index][0]+"%";
          newNavEl.style.right = navElements[index][1]+"%";
          newNavEl.style.bottom = navElements[index][2]+"%";
          newNavEl.style.left = navElements[index][3]+"%";
          newNavEl.sceneToChangeTo = navElements[index][4];
          document.body.appendChild(newNavEl);
          //addEvent(newNavEl, "click", newNavEl.sceneToChangeTo.changeScene() );
          //var test = document.getElementsByClassName("navBtn"); console.log(test[0].sceneToChangeTo);
        }
      };
      
      /*this.changeNav = function() {
        var existingNavs = document.getElementsByClassName("navBtn");
        for(var e = 0; e < existingNavs.length; e++) {
          existingNavs[e].remove();
        }
      };*/
      
      /*function north() { }
      function east() { }
      function south() { }
      function west() { }
      
      this.init = function(n, e, s, w) {
        if(n) { this.north = new north(); }
        if(e) { this.east = new east(); }
        if(s) { this.south = new south(); }
        if(w) { this.west = new west(); }
        
        this.north.t = n[0];
        this.north.r = n[1];
        this.north.b = n[2];
        this.north.l = n[3];
        
        this.east.t = e[0];
        this.east.r = e[1];
        this.east.b = e[2];
        this.east.l = e[3];
        
        this.south.t = s[0];
        this.south.r = s[1];
        this.south.b = s[2];
        this.south.l = s[3];
        
        this.west.t = w[0];
        this.west.r = w[1];
        this.west.b = w[2];
        this.west.l = w[3];
        
      };
      
      this.changeNav = function() {
        if(this.parentScene.north) { northBtn.style.display = "block"; } else { northBtn.style.display = "none"; }
        if(this.north.t) { northBtn.style.top = this.north.t+"%"; } else { northBtn.style.top = null; }
        if(this.north.r) { northBtn.style.right = this.north.r+"%"; } else { northBtn.style.right = null; }
        if(this.north.b) { northBtn.style.bottom = this.north.b+"%"; } else { northBtn.style.bottom = null; }
        if(this.north.l) { northBtn.style.left = this.north.l+"%"; } else { northBtn.style.left = null; }
        
        if(this.parentScene.east) { eastBtn.style.display = "block"; } else { eastBtn.style.display = "none"; }
        if(this.east.t) { eastBtn.style.top = this.east.t+"%"; } else { eastBtn.style.top = null; }
        if(this.east.r) { eastBtn.style.right = this.east.r+"%"; } else { eastBtn.style.right = null; }
        if(this.east.b) { eastBtn.style.bottom = this.east.b+"%"; } else { eastBtn.style.bottom = null; }
        if(this.east.l) { eastBtn.style.left = this.east.l+"%"; } else { eastBtn.style.left = ""; }
        
        if(this.parentScene.south) { southBtn.style.display = "block"; } else { southBtn.style.display = "none"; }
        if(this.south.t) { southBtn.style.top = this.south.t+"%"; } else { southBtn.style.top = null; }
        if(this.south.r) { southBtn.style.right = this.south.r+"%"; } else { southBtn.style.right = null; }
        if(this.south.b) { southBtn.style.bottom = this.south.b+"%"; } else { southBtn.style.bottom = null; }
        if(this.south.l) { southBtn.style.left = this.south.l+"%"; } else { southBtn.style.left = null; }
        
        if(this.parentScene.west) { westBtn.style.display = "block"; } else { westBtn.style.display = "none"; }
        if(this.west.t) { westBtn.style.top = this.west.t+"%"; } else { westBtn.style.top = null; }
        if(this.west.r) { westBtn.style.right = this.west.r+"%"; } else { westBtn.style.right = null; }
        if(this.west.b) { westBtn.style.bottom = this.west.b+"%"; } else { westBtn.style.bottom = null; }
        if(this.west.l) { westBtn.style.left = this.west.l+"%"; } else { westBtn.style.left = null; }
      };*/
      
    }
    
    this.init = function(src, navElements) {
      this.videoSrc = "assets/videos/"+src+".mp4";
      this.nav = new nav(this, navElements);
    };
    
    this.changeScene = function() {
      var player = document.getElementById("player"),
          vidSourceElement = document.getElementById("source");
          
      // Handle switching video sources to the new one
      vidSourceElement.setAttribute("src", this.videoSrc);
      player.load();
      player.play();
        //will need to optimize the loads here. need to find a reliable way to preload videos contained in scenes.
      
      // Set the current scene to this new one (nav controls are in relation to the current scene)
      currentMap.currentScene = this;
      
      currentMap.currentScene.nav.init();
      
    };
    
  }
  
}

