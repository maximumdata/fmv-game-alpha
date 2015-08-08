// global variables -- to track game information
//var currentMap;

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
    function nav(p, navElements, mapChangers) {
      this.parentScene = p;
      
      this.init = function() {
        var index,
            existingNavElements = document.getElementsByClassName("navBtn");
        
        if(existingNavElements.length) {    
          while(existingNavElements.length > 0) {
            existingNavElements[0].remove();
          }
        }
        
        if(navElements) {
          for(index = 0; index < navElements.length; index++) {
            var newNavEl = document.createElement("BUTTON");
            newNavEl.setAttribute("class", "navBtn");
            newNavEl.style.top = navElements[index][0]+"%";
            newNavEl.style.left = navElements[index][1]+"%";
            newNavEl.sceneToChangeTo = navElements[index][2];
            document.body.appendChild(newNavEl);
          }
        }
        
        if(mapChangers) {
          for(index = 0; index < mapChangers.length; index++) {
            var newMapNavEl = document.createElement("BUTTON");
            newMapNavEl.setAttribute("class", "navBtn");
            newMapNavEl.style.top = mapChangers[index][0]+"%";
            newMapNavEl.style.left = mapChangers[index][1]+"%";
            newMapNavEl.mapToChangeTo = mapChangers[index][2];
            document.body.appendChild(newMapNavEl);
          }
          
        }
      };
      
    }
    
    this.init = function(src, navElements, mapChangers) {
      this.videoSrc = "assets/videos/"+src+".mp4";
      this.nav = new nav(this, navElements, mapChangers);
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

