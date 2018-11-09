//Le carré bleu
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(20, 360);
ctx.lineTo(360, 360);
ctx.lineTo(360, 20);
ctx.lineTo(20, 20);
ctx.strokeStyle = "#0000FF";
ctx.stroke();
ctx.fillStyle = "#0000FF";
ctx.fill();
//La petite courbe
var p = document.getElementById("myCanvas");
var ptx = p.getContext("2d");
ptx.beginPath();
ptx.moveTo(140,200);
ptx.quadraticCurveTo(180,60,260,200);
ptx.strokeStyle = "#FFFFFF";
ptx.stroke();
ptx.fillStyle = "#FFFFFF";
ptx.fill();





//La grande courbe
var g = document.getElementById("myCanvas");
var gtx = g.getContext("2d");
gtx.beginPath();
gtx.moveTo(100,200);
gtx.quadraticCurveTo(180,120,300,200);
gtx.quadraticCurveTo(180,260,100,200);
gtx.strokeStyle = "#E0E1F3";
gtx.stroke();
gtx.fillStyle = "#E0E1F3";
gtx.fill();
