// NAV

var newmap = new map(10,4, "x3y1");
var testmap2 = new map(3, 2, "x0y2");

newmap.scenes[3][1].init("x0y0", [["45","","","45", newmap.scenes[3][2]], ["25","","","10", newmap.scenes[3][2]], ["35","","","10", newmap.scenes[3][2]], ["25","","","15", newmap.scenes[3][2]]]); //newmap.scenes[3][2], null, null, null, ["45","","","45"], ["","","20","75"], [], ["","","35","25"]);
newmap.scenes[3][2].init("x0y1", [["90","","","50", newmap.scenes[3][1]]]);

testmap2.scenes[0][2].init("x-2y3");
