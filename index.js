var phoArr = document.getElementById("photos");
var phoNum = phoArr.getElementsByTagName("img");
var phoLen = phoNum.length;
var ang = Math.floor(360 / phoLen);
for (var i = 0; i < phoLen; i++) {
  phoNum[i].style = 'transform : rotateY(' + ang * i + 'deg) translateZ(300px) ';
}