// NAV

var eastBtn,
    westBtn,
    northBtn,
    southBtn,
    play;
    
var newmap = new map(10,4, "x3y1");
var testmap2 = new map(3, 2, "x0y2");

newmap.scenes[3][1].init("x0y0", [["45","","","45", newmap.scenes[3][2]]]); //newmap.scenes[3][2], null, null, null, ["45","","","45"], ["","","20","75"], [], ["","","35","25"]);
newmap.scenes[3][2].init("x0y1", [["90","","","50", newmap.scenes[3][1]]]);

//testmap2.scenes[0][2].init("x0y2");

// SCENES
    /*x0y0 = new scene(),
    x1y0 = new scene(),
    xMinus1y0  = new scene(),
    x0y1 = new scene(),
    x0y2 = new scene(),
    xMinus1y1 = new scene(),
    xMinus2y1 = new scene(),
    xMinus1y2 = new scene(),
    xMinus1y3 = new scene(),
    xMinus2y3 = new scene();
    */
// INIT SCENES WITH DATA
/*x0y0.init("x0y0", x0y1, x1y0, null, xMinus1y0, ["45","","","45"], ["","","20","75"], [], ["","","35","25"]);
x1y0.init("x1y0", null, null, x0y0, null, [], [], ["","","15","45"], []);
xMinus1y0.init("x-1y0", null, xMinus1y1, x0y0, null, [], ["","","20","75"], ["","","10","45"], []);
xMinus1y1.init("x-1y1", xMinus1y2, x0y1, xMinus1y0, xMinus2y1, ["44","","","43"], ["","10","45", ""], ["","","10","45"], ["","","35","25"]);
xMinus2y1.init("x-2y1", null, null, xMinus1y1, null, [], [], ["","","10","45"], []);
xMinus1y2.init("x-1y2", xMinus1y3, x0y2, xMinus1y1, null, ["65","","","60"], ["70","7","",""], ["90","","","53"], []);
xMinus1y3.init("x-1y3", null, null, xMinus1y2, xMinus2y3, [], [], ["90","","","50"], ["70","","","30"]);
xMinus2y3.init("x-2y3", null, null, xMinus1y3, null, [], [], ["90","","","50"], []);
x0y1.init("x0y1", x0y2, null, x0y0, xMinus1y1, ["55","","","43"], [], ["90","","","50"], ["55","","","7"]);
x0y2.init("x0y2", null, null, x0y1, xMinus1y2, [], [], ["90","","","50"], ["55","","","7"]);
*/