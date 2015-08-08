// NAV

var outsideOffice = new map(3,3, "x2y0");


outsideOffice.scenes[1][0].init("x1y0", [["80","45", outsideOffice.scenes[2][0]], ["80","80", outsideOffice.scenes[1][1]]]);
outsideOffice.scenes[2][0].init("x2y0", [["45","45", outsideOffice.scenes[2][1]], ["75","75", outsideOffice.scenes[3][0]], ["65","25", outsideOffice.scenes[1][0]]]);
outsideOffice.scenes[3][0].init("x3y0", [["80","45", outsideOffice.scenes[2][0]]]);
outsideOffice.scenes[0][1].init("x0y1", [["80","45", outsideOffice.scenes[1][1]]]);
outsideOffice.scenes[1][1].init("x1y1", [["80","45", outsideOffice.scenes[1][0]], ["50","45", outsideOffice.scenes[1][2]], ["60","20", outsideOffice.scenes[0][1]], ["50","80", outsideOffice.scenes[2][1]]]);
outsideOffice.scenes[2][1].init("x2y1", [["80","45", outsideOffice.scenes[2][0]], ["50","10", outsideOffice.scenes[1][1]], ["50","40", outsideOffice.scenes[2][2]]]);
outsideOffice.scenes[1][2].init("x1y2", [["90","50", outsideOffice.scenes[1][1]], ["60","90", outsideOffice.scenes[2][2]], ["70","55", outsideOffice.scenes[1][3]]], [["70","25", outsideOffice]]);
outsideOffice.scenes[2][2].init("x2y2", [["80","45", outsideOffice.scenes[2][1]], ["50","15", outsideOffice.scenes[1][2]]]);
outsideOffice.scenes[0][3].init("x0y3", [["80","45", outsideOffice.scenes[1][3]]]);
outsideOffice.scenes[1][3].init("x1y3", [["90","45", outsideOffice.scenes[1][2]], ["70","10", outsideOffice.scenes[0][3]]]);
//outsideOffice.scenes[3][2].init("x0y1", [["90","50", outsideOffice.scenes[3][1]]], [["35","75", testmap2]]);

