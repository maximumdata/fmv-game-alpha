// CONSTRUCTOR

function scene() {
  
  // construct an object to hold the scene's navigation. needs to contain positional information for each navigation element.
  function nav(p) {
    this.parentScene = p;
    
    function north() { }
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
    };
    
  }
  
  this.init = function(src, n, e, s, w, goN, goE, goS, goW) {
    this.videoSrc = "assets/videos/"+src+".mp4";
    this.north = n;
    this.east = e;
    this.south = s;
    this.west = w;
    this.nav = new nav(this);
    this.nav.init(goN, goE, goS, goW);
  };
  
  this.changeScene = function() {
    var player = document.getElementById("player"),
        vidSourceElement = document.getElementById("source");
        
    // Handle switching video sources to the new one
    vidSourceElement.setAttribute("src", this.videoSrc);
    player.load();
    player.play();
      // will need to optimize the loads here. need to find a reliable way to preload videos contained in scenes.
    
    // Set the current scene to this new one (nav controls are in relation to the current scene)
    currentScene = this;
    
    this.nav.changeNav();
    if(document.getElementById("youWin") ) {
      var youWinEl = document.getElementById("youWin");
      youWinEl.remove();
    }
    if(this.videoSrc == "assets/videos/x-2y3.mp4") {
      var youWin = document.createElement("DIV");
      youWin.setAttribute("id","youWin");
      youWin.style.color = "red";
      youWin.style.fontWeight = "bold";
      youWin.style.fontSize = "100px";
      youWin.style.position = "absolute";
      youWin.style.zIndex = "10";
      youWin.style.top = "30%";
      youWin.style.left = "30%";
      youWin.innerHTML = "YA' DID IT!";
      document.body.appendChild(youWin);
    }
  };
  
}


// INIT SCENES WITH DATA
x0y0.init("x0y0", x0y1, x1y0, null, xMinus1y0, ["45","","","45"], ["","","20","75"], [], ["","","35","25"]);
x1y0.init("x1y0", null, null, x0y0, null, [], [], ["","","15","45"], []);
xMinus1y0.init("x-1y0", null, xMinus1y1, x0y0, null, [], ["","","20","75"], ["","","10","45"], []);
xMinus1y1.init("x-1y1", xMinus1y2, x0y1, xMinus1y0, xMinus2y1, ["44","","","43"], ["","10","45", ""], ["","","10","45"], ["","","35","25"]);
xMinus2y1.init("x-2y1", null, null, xMinus1y1, null, [], [], ["","","10","45"], []);
xMinus1y2.init("x-1y2", xMinus1y3, x0y2, xMinus1y1, null, ["65","","","60"], ["70","7","",""], ["90","","","53"], []);
xMinus1y3.init("x-1y3", null, null, xMinus1y2, xMinus2y3, [], [], ["90","","","50"], ["70","","","30"]);
xMinus2y3.init("x-2y3", null, null, xMinus1y3, null, [], [], ["90","","","50"], []);
x0y1.init("x0y1", x0y2, null, x0y0, xMinus1y1, ["55","","","43"], [], ["90","","","50"], ["55","","","7"]);
x0y2.init("x0y2", null, null, x0y1, xMinus1y2, [], [], ["90","","","50"], ["55","","","7"]);
